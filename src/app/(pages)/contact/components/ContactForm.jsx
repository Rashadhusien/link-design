"use client";
import { useState } from "react";
import { InputBase } from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Button from "../../../components/ui/Button";

function ContactForm() {
  const [state, handleSubmit] = useForm("xgvweqkq");

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <div className="mb-16">
        <span className=" uppercase tracking-wider text-lg text-[#9bb1d5]">
          احجز عبر الإنترنت
        </span>
        <h2 className=" text-3xl font-bold capitalize tracking-wider">
          حجز المواعيد.
        </h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="md:flex justify-between gap-1 items-center">
          <div>
            <label htmlFor="name">الاسم *</label>
            <InputBase
              type="text"
              id="name"
              name="name"
              placeholder={"اسمك هنا"}
              className="mt-4 w-full p-4 h-14 mb-4 border-none outline-none text-[#bababa] bg-inputgray rounded-lg"
              required
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div>
            <label htmlFor="email">البريد الإلكتروني</label>
            <InputBase
              type="email"
              id="email"
              name="email"
              placeholder="test@test.com"
              className="mt-4 w-full p-4 h-14 mb-4 border-none outline-none text-[#bababa] bg-inputgray rounded-lg"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
        </div>
        <div>
          <label htmlFor="phone">رقم الهاتف*</label>

          <InputBase
            type="text"
            id="phone"
            name="phone"
            placeholder="01234567891"
            className="mt-4 w-full p-4 h-14 mb-4 border-none outline-none text-[#bababa] bg-inputgray rounded-lg"
            required
          />
          <ValidationError prefix="Phone" field="phone" errors={state.errors} />
        </div>
        <div>
          <label htmlFor="txt">رسالة قصيرة *</label>
          <textarea
            cols="30"
            rows="5"
            className={`mt-4 p-4 w-full relative z-30 mb-4 border-none outline-none text-[#bababa] bg-inputgray rounded-lg`}
            placeholder={"رسالة"}
            name="message"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <Button
          className="p-3 text-md md:p-4 md:text-lg   hover:bg-btnhover  text-slate bg-primary inline-block font-[600] capitalize z-10 relative transition-all duration-300 rounded-lg tracking-widest"
          type="submit"
          disabled={state.submitting}
          onClick={handleClick}
        >
          الحصول على موعد
        </Button>
      </form>
      {state.succeeded ? (
        <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            className="px-4"
            sx={{ width: "100%", display: "flex", gap: 2 }}
          >
            تم إرسال رسالتك بنجاح !
          </Alert>
        </Snackbar>
      ) : (
        <></>
      )}
    </>
  );
}

export default ContactForm;
