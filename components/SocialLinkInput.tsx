import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface SocialLinkInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SocialLinkInput({
  id,
  label,
  value,
  onChange,
  placeholder,
}: SocialLinkInputProps) {
  return (
    <div className="grid w-full items-center gap-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        placeholder={placeholder || `Enter ${label}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
} 