import { createClient } from '@supabase/supabase-js';

const url = "https://akzddkvtqclxttyuokzl.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFremRka3Z0cWNseHR0eXVva3psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3MDgwNTYsImV4cCI6MjA0NTI4NDA1Nn0.3Fi68zbIVuP1gi5avr-nI5w--UIn9IPZM4NagcKbylI";

const supabase = createClient(url,key);

export default supabase;