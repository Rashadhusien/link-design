"useClient";
import Link from "next/link";
import {
  X,
  LogOut,
  User2,
  ChevronUp,
  ShieldCheck,
  UserCircle,
} from "lucide-react"; // ✅ Lucide Icons
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // ✅ ShadCN dropdown

import { useRouter, usePathname } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "firebaseConfig";

const AppSidebar = ({ toggleDrawer, user, navData, isAdmin }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div className="absolute top-0 left-0 w-[250px] h-screen bg-white shadow-lg p-5 flex flex-col z-40">
      {/* Close Sidebar Button */}
      <button onClick={toggleDrawer} className="self-end">
        <X size={28} />
      </button>

      {/* Navigation Links */}
      <ul className="mt-10 space-y-4">
        {navData?.map(({ text, href }) => (
          <li key={text} onClick={toggleDrawer}>
            <Link
              href={href}
              className={`block p-3 rounded-md hover:bg-bgtestemonial transition ${
                pathname === href ? "bg-bgtestemonial" : ""
              }`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>

      {/* User Dropdown Menu (Only if user exists) */}
      {user && (
        <div className="mt-5 relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center w-full p-3 bg-bgtestemonial text-gray rounded-md hover:bg-gray hover:text-white duration-300">
                <User2 className="ml-2" />
                {user?.displayName || "اسم المستخدم"}
                <ChevronUp className="mr-auto" />
              </button>
            </DropdownMenuTrigger>

            {/* Make Dropdown Appear Above Sidebar */}
            <DropdownMenuContent align="end" side="top" className={"z-[1000]"}>
              {isAdmin && (
                <DropdownMenuItem
                  onClick={() => {
                    router.push("/dashboard");
                    toggleDrawer();
                  }}
                  className="flex items-center gap-2"
                >
                  <ShieldCheck size={18} />
                  لوحة التحكم
                </DropdownMenuItem>
              )}
              <DropdownMenuItem
                onClick={() => {
                  router.push("/profile");
                  toggleDrawer();
                }}
                className="flex items-center gap-2"
              >
                <UserCircle size={18} />
                ملفي الشخصي
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  signOut(auth);
                  router.push("/sign-in");
                  toggleDrawer();
                }}
                className="flex items-center gap-2 text-red-500  "
              >
                <LogOut size={18} />
                تسجيل الخروج
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default AppSidebar;
