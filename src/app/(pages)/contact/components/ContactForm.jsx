"use client";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Toast, ToastProvider, ToastViewport } from "@/components/ui/toast";
import { auth } from "firebaseConfig"; // Import your Firebase auth config
import { useAuthState } from "react-firebase-hooks/auth";

function ContactForm() {
  const [state, handleSubmit] = useForm("xgvweqkq");
  const [showToast, setShowToast] = useState(false);
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Prefill name and email when user is authenticated
  useEffect(() => {
    if (user) {
      setName(user.displayName || "");
      setEmail(user.email || "");
    }
  }, [user]);

  const handleClose = () => {
    setShowToast(false);
  };

  return (
    <ToastProvider>
      <div className="mb-16 ">
        <span className="uppercase tracking-wider text-lg text-[#9bb1d5]">
          احجز عبر الإنترنت
        </span>
        <h2 className="text-3xl font-bold capitalize tracking-wider">
          حجز المواعيد.
        </h2>
      </div>

      <form
        onSubmit={(e) => {
          handleSubmit(e);
          setShowToast(true);
        }}
      >
        <div className="md:flex justify-between gap-4 items-center">
          <div className="w-full">
            <label htmlFor="name">الاسم *</label>
            <Input
              type="text"
              id="name"
              name="name"
              placeholder="اسمك هنا"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-2 bg-inputgray border-none"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="w-full">
            <label htmlFor="email">البريد الإلكتروني</label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="test@test.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 bg-inputgray border-none"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="phone">رقم الهاتف *</label>
          <Input
            type="text"
            id="phone"
            name="phone"
            placeholder="01234567891"
            required
            className="mt-2 bg-inputgray border-none"
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div className="mt-4">
          <label htmlFor="message">رسالة قصيرة *</label>
          <Textarea
            id="message"
            name="message"
            rows={5}
            placeholder="رسالة"
            required
            className="mt-2 bg-inputgray border-none"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <Button
          className="mt-4 w-full md:w-auto p-4"
          type="submit"
          disabled={state.submitting}
        >
          الحصول على موعد
        </Button>
      </form>

      {state.succeeded && showToast && (
        <Toast>
          <CheckCircle className="text-green-500" />
          <span>تم إرسال رسالتك بنجاح!</span>
          <Button variant="ghost" size="sm" onClick={handleClose}>
            إغلاق
          </Button>
        </Toast>
      )}

      <ToastViewport />
    </ToastProvider>
  );
}

export default ContactForm;
