"use client";

import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon, Search } from "lucide-react";
import { useMemo, useState } from "react";

function Input({ className, type, value, ...props }: React.ComponentProps<"input">) {
    const [showPassword, setShowPassword] = useState(false);

    const inputMode = useMemo(() => {
        switch (type) {
            case "email":
                return "email";
            case "number":
                return "numeric";
            case "tel":
                return "tel";
            case "url":
                return "url";
            case "search":
                return "search";
            default:
                return "text";
        }
    }, [type]);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative flex items-center rounded-md border focus-within:ring-1 focus-within:ring-ring px-2 dark:bg-input/30">
            {type === "password" && <LockIcon className="h-5 w-5 text-muted-foreground" />}
            {type === "email" && <MailIcon className="h-5 w-5 text-muted-foreground" />}
            {type === "search" && <Search className="h-5 w-5 text-muted-foreground" />}
            <input
                type={showPassword ? "text" : type}
                data-slot="input"
                value={value}
                className={cn(
                    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent pl-3 pr-2 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                    "border-0 focus-visible:ring-0 shadow-none",
                    className
                )}
                inputMode={inputMode}
                {...props}
            />
            {type === "password" && (
                <button
                    type="button"
                    tabIndex={-1}
                    className="h-full absolute right-4 rounded-2xl cursor-pointer"
                    onClick={togglePasswordVisibility}
                    aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                    aria-pressed={showPassword}
                >
                    {showPassword ? <EyeIcon className="h-5 w-5 text-muted-foreground" /> : <EyeOffIcon className="h-5 w-5 text-muted-foreground" />}
                </button>
            )}
        </div>
    );
}

export { Input };
