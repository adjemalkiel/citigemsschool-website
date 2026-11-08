#!/usr/bin/env python3
"""Assert every data-i18n key in HTML exists in js/i18n.js (ponytail self-check)."""
import pathlib
import re
import sys

root = pathlib.Path(__file__).resolve().parent
js = (root / "js" / "i18n.js").read_text(encoding="utf-8")
keys = set(re.findall(r'"([a-z0-9.]+)"\s*:\s*\{\s*fr:', js))
used = set()
for html in root.glob("*.html"):
    used |= set(re.findall(r'data-i18n="([^"]+)"', html.read_text(encoding="utf-8")))
missing = sorted(used - keys)
if missing:
    print("FAIL missing keys:", missing, file=sys.stderr)
    sys.exit(1)
logo = root / "public" / "citigems-logo.png"
if not logo.is_file() or logo.stat().st_size < 1000:
    print("FAIL logo missing", file=sys.stderr)
    sys.exit(1)
print(f"ok {len(used)} keys, logo {logo.stat().st_size} bytes")
