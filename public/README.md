## Supabase Auth Test (Static HTML)

This is a minimal static site to test Supabase email/password authentication using `@supabase/supabase-js` v2 (ESM via CDN). It includes pages for Sign Up and Log In and shows how to pass user metadata.

### Project structure

```
public/
  index.html         # links to signup/login
  signup.html        # email+password signup with metadata (full_name, phone)
  login.html         # email+password login
  supabaseClient.js  # initializes Supabase client (URL + anon key)
```

### Prerequisites

- A Supabase project
- Your `Project URL` and `anon` public API key from Supabase Dashboard → Project Settings → API
- Windows PowerShell (or any shell)

### Configure Supabase

Edit `supabaseClient.js` and set:

```js
const SUPABASE_URL = 'https://YOUR-PROJECT-REF.supabase.co'
const SUPABASE_ANON_KEY = 'YOUR-ANON-KEY'
```

Ensure Auth → URL Configuration includes your local URL (e.g., `http://localhost:5500`).

### Run locally

From this folder:

- Option A (Node, recommended):
```bash
npx serve -l 5500 .
```

- Option B (Python):
```bash
python -m http.server 5500
```

Open `http://localhost:5500/` in your browser.

### Test flow

1) Open `signup.html`, enter email, password, optional name/phone, click Create account.
2) If email confirmations are enabled, open the confirmation link sent to your inbox.
3) Go to `login.html`, log in with the same email/password.
4) Check the browser console for `user_metadata` and the UI success messages.

### Enable/disable email confirmation

- Supabase Dashboard → Authentication → Providers → Email → toggle "Confirm email" → Save.
- If you disable confirmations for testing, delete any existing unconfirmed users and sign up again.
- To resend a confirmation email from the console:

```js
import { supabase } from './supabaseClient.js'
await supabase.auth.resend({ type: 'signup', email: 'you@example.com' })
```

### Where to verify in Supabase

- Authentication → Users: new users appear here; check status and `user_metadata`.
- Authentication → Logs: see `user_signed_up`, `user_confirmed`, `user_logged_in` events.

### Troubleshooting

- Email not confirmed: confirm via email, resend from Dashboard, or temporarily disable confirmations.
- CORS/auth failures: ensure Auth → URL Configuration includes `http://localhost:5500`.
- Wrong project: verify `SUPABASE_URL` and `SUPABASE_ANON_KEY` match Project Settings → API.

### Security notes

- The `anon` key is safe to expose in client code; never expose the `service_role` key.
- Use Row Level Security (RLS) and policies for any database tables you query from the client.

### GitHub

It’s fine to publish this demo. Include this README and a `.gitignore`. Do not commit any private keys.


