import * as React from "react";
import { Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@radix-ui/react-label";
import Error from "./Error";

export default function SelectField({
  name,
  control,
  label = "Select field",
  required = false,
  placeholder = "Select an option",
  options,
  error,
}) {
  return (
    <div className="mb-4">
      <Label
        htmlFor={String(name)}
        className="my-2 text-app-label font-semibold block"
      >
        {label}
        {required && <span className="text-red-500">*</span>}
      </Label>

      <Controller
        name={name} // ✅ no more 'as any'
        control={control}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              <SelectLabel>{label}</SelectLabel>
              {options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />

      {error && <Error message={error} />}
    </div>
  );
}
