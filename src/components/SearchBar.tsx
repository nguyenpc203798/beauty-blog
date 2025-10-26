import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  debounceMs?: number;
}

const SearchBar = ({ value, onChange, debounceMs = 500 }: SearchBarProps) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(localValue);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [localValue, onChange, debounceMs]);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  return (
    <div className="relative max-w-md w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
      <Input
        type="text"
        placeholder="Search articles..."
        value={localValue}
        onChange={(e) => setLocalValue(e.target.value)}
        className="pl-10 bg-card border-border shadow-soft transition-smooth focus:shadow-elegant"
      />
    </div>
  );
};

export default SearchBar;
