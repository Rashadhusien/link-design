import { ShieldCheck, UserCircle, LogOut, ChevronUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";

import { auth } from "firebaseConfig";

const DropDown = ({ user, isAdmin }) => {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <UserCircle size={24} />
          {user.displayName && user.displayName}
          <ChevronUp className="mr-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={"z-[1000]"}>
        {isAdmin && (
          <DropdownMenuItem
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-2"
          >
            <ShieldCheck size={18} />
            لوحة التحكم
          </DropdownMenuItem>
        )}
        <DropdownMenuItem
          onClick={() => router.push("/profile")}
          className="flex items-center gap-2"
        >
          <UserCircle size={18} />
          ملفي الشخصي
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            signOut(auth);
            router.push("/sign-in");
          }}
          className="flex items-center gap-2 text-red-500 "
        >
          <LogOut size={18} />
          تسجيل الخروج
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
