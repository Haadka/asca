"use client"

import { useState, ChangeEvent, FormEvent, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"

interface FormData {
  firstName: string;
  lastName: string;
  suburb: string;
  email: string;
  phone: string;
  challenge: string;
  sendNewsUpdates: boolean;
  somalilandRecognition: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  suburb?: string;
  email?: string;
  phone?: string;
  challenge?: string;
}

export default function MembershipPage() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    suburb: "",
    email: "",
    phone: "",
    challenge: "",
    sendNewsUpdates: true,
    somalilandRecognition: true,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()
  const [challengeNum1, setChallengeNum1] = useState(0)
  const [challengeNum2, setChallengeNum2] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false) // New state for submission status

  useEffect(() => {
    generateChallenge();
  }, [])

  const generateChallenge = () => {
    setChallengeNum1(Math.floor(Math.random() * 10) + 1)
    setChallengeNum2(Math.floor(Math.random() * 10) + 1)
  }

  const validate = (): FormErrors => {
    console.log("validate: Starting validation. formData:", formData, "challengeNum1:", challengeNum1, "challengeNum2:", challengeNum2);
    const newErrors: FormErrors = {}
    if (!formData.firstName) newErrors.firstName = "First name is required."
    if (!formData.lastName) newErrors.lastName = "Last name is required."
    if (!formData.suburb) newErrors.suburb = "Suburb is required."
    if (!formData.email) {
      newErrors.email = "Email is required."
    } else {
      const trimmedEmail = formData.email.trim();
      const emailRegex = /\S+@\S+\.\S+/; // Standard regex for basic email format
      const isEmailValid = emailRegex.test(trimmedEmail);
      console.log(`validate: Email validation for (original: '${formData.email}', trimmed: '${trimmedEmail}'). Regex: ${String(emailRegex)}. Valid: ${isEmailValid}`);
      if (!isEmailValid) {
        newErrors.email = "Email is invalid."
      }
    }
    if (!formData.phone) {
      newErrors.phone = "Phone number is required."
    } else if (!/^\+?\d{7,15}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Phone number must be 7-15 digits and may start with a '+'."
    }
    const expectedChallengeAnswer = challengeNum1 + challengeNum2;
    console.log("validate: Expected challenge answer:", expectedChallengeAnswer);
    if (!formData.challenge) {
      console.log("validate: Challenge input is empty.");
      newErrors.challenge = "Please solve the challenge."
    } else if (parseInt(formData.challenge) !== expectedChallengeAnswer) {
      console.log(`validate: Challenge mismatch. Input: '${formData.challenge}', Parsed: ${parseInt(formData.challenge)}, Expected: ${expectedChallengeAnswer}`);
      newErrors.challenge = "Incorrect answer to the challenge."
    } else {
      console.log("validate: Challenge passed.");
    }
    console.log("validate: Validation errors found:", newErrors);
    return newErrors
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      generateChallenge(); // Regenerate challenge on failed attempt
      setFormData(prev => ({ ...prev, challenge: "" })); // Clear challenge input
      return
    }
    setErrors({})
    setIsLoading(true)
    console.log("handleSubmit: Starting submission process...");

    // Prepare form data as a JSON object
    const { challenge, ...applicationData } = formData; // Exclude challenge from submitted data
    const jsonData = JSON.stringify(applicationData);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const jsonFile = new File([blob], `membership_application_${Date.now()}.json`, { type: 'application/json' });

    const apiFormData = new FormData()
    apiFormData.append("file", jsonFile) // The API endpoint expects a 'file'

    console.log("handleSubmit: Prepared JSON data:", applicationData);
    console.log("handleSubmit: Prepared File object:", jsonFile);
    console.log("handleSubmit: Prepared FormData for API:", apiFormData);

    try {
      console.log("handleSubmit: Attempting to fetch /api/upload-membership-doc");
      const response = await fetch("/api/upload-membership-doc", {
        method: "POST",
        body: apiFormData, // Send the FormData containing the JSON file
      });
      console.log("handleSubmit: Fetch response received:", response);

      // Try to clone the response to read it multiple times if needed, or log carefully
      let result;
      try {
        const clonedResponse = response.clone(); // Clone for safe reading
        result = await clonedResponse.json(); // Attempt to parse JSON
        console.log("handleSubmit: Parsed response JSON:", result);
      } catch (jsonError) {
        console.error("handleSubmit: Error parsing JSON response:", jsonError);
        // If JSON parsing fails, try to get text, but be aware response body might be consumed
        // For simplicity, we'll rely on the main response.ok check and error toast
        result = { error: "Failed to parse server response." };
        if (response.bodyUsed) {
          console.log("handleSubmit: Response body was already used before text() or json() could be called again.");
        } else {
          const textResponse = await response.text(); // Fallback to text if not already consumed
          console.log("handleSubmit: Response text (if JSON parsing failed):", textResponse);
          result.error = textResponse || result.error;
        }
      }


      if (response.ok) {
        console.log("handleSubmit: Response OK. Toasting success.");
        toast({
          title: "Application Submitted",
          description: "Thank you for your application! We will be in touch soon.",
        })
        setIsSubmitted(true) // Set submission status to true
        // Clear form data - already handled by resetting to initial state or could be removed if hiding form
        // setFormData({
        //   firstName: "",
        //   lastName: "",
        //   suburb: "",
        //   email: "",
        //   phone: "",
        //   challenge: "",
        //   sendNewsUpdates: true, 
        //   somalilandRecognition: true, 
        // });
        // generateChallenge(); // No need to regenerate if form is hidden
      } else {
        console.log("handleSubmit: Response not OK. Status:", response.status, "Result:", result);
        toast({
          title: "Submission Failed",
          description: result.error || "An unknown error occurred.",
          variant: "destructive",
        });
        generateChallenge();
        setFormData(prev => ({ ...prev, challenge: "" }));
      }
    } catch (error) {
      console.error("handleSubmit: Catch block error:", error);
      toast({
        title: "Submission Error",
        description: "An error occurred while submitting your application. Please try again.",
        variant: "destructive",
      })
      generateChallenge();
      setFormData(prev => ({ ...prev, challenge: "" }));
    } finally {
      setIsLoading(false)
      console.log("handleSubmit: Submission process finished.");
    }
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-primary mb-6 text-center">
          Join ASCA
        </h1>
        <p className="text-lg text-foreground mb-8 text-center">
          Become part of our vibrant community supporting Somaliland culture in Australia.
          Please fill out the membership application form below.
        </p>

        {isSubmitted ? (
          <div className="bg-card p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-primary mb-4">Thank You!</h2>
            <p className="text-lg text-foreground">
              Your membership application has been successfully submitted. We will review your application and contact you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-md">
            <div>
              <Label htmlFor="firstName" className="text-lg">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-2"
              />
              {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <Label htmlFor="lastName" className="text-lg">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-2"
              />
              {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
            </div>

            <div>
              <Label htmlFor="suburb" className="text-lg">Suburb</Label>
              <Input
                id="suburb"
                name="suburb"
                type="text"
                value={formData.suburb}
                onChange={handleChange}
                className="mt-2"
              />
              {errors.suburb && <p className="text-sm text-destructive mt-1">{errors.suburb}</p>}
            </div>

            <div>
              <Label htmlFor="email" className="text-lg">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2"
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>

            <div>
              <Label htmlFor="phone" className="text-lg">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="mt-2"
              />
              {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
            </div>

            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="sendNewsUpdates"
                name="sendNewsUpdates"
                checked={formData.sendNewsUpdates}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, sendNewsUpdates: !!checked }))}
              />
              <Label htmlFor="sendNewsUpdates" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Send me news and updates
              </Label>
            </div>

            <div className="flex items-center space-x-2 mt-4">
              <Checkbox
                id="somalilandRecognition"
                name="somalilandRecognition"
                checked={formData.somalilandRecognition}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, somalilandRecognition: !!checked }))}
              />
              <Label htmlFor="somalilandRecognition" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                I want to take part in Somaliland Recognition activities
              </Label>
            </div>

            <div>
              <Label htmlFor="challenge" className="text-lg mt-4 block">
                Bot Challenge: What is {challengeNum1} + {challengeNum2}?
              </Label>
              <Input
                id="challenge"
                name="challenge"
                type="number"
                value={formData.challenge}
                onChange={handleChange}
                className="mt-2"
              />
              {errors.challenge && <p className="text-sm text-destructive mt-1">{errors.challenge}</p>}
            </div>

            <p className="text-sm text-muted-foreground text-center">
              Your information is stored securely and will only be used for membership purposes.
            </p>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}

