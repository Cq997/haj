import re

file_path = "/home/ubuntu/final_push_dir/haj/mina47.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Find the DOMContentLoaded event listener
dom_content_loaded_pattern = r"document\\.addEventListener\\(\\'DOMContentLoaded\\', \\(\\) => \\{.*?\\}\\);"
dom_content_loaded_match = re.search(dom_content_loaded_pattern, content, re.DOTALL)

if dom_content_loaded_match:
    old_listener_content = dom_content_loaded_match.group(0)
    
    # Add logic to hide all panels and show homePanel
    new_listener_content = old_listener_content.replace(
        "// تفعيل اللوحة الافتراضية عند التحميل",
        """  document.querySelectorAll(\".panel\").forEach(p => p.style.display = \"none\");\n  const homePanel = document.getElementById(\\'homePanel\\');\n  if (homePanel) {\n    homePanel.style.display = \"block\";\n    homePanel.classList.add(\\'active\\');\n  }\n  document.querySelector(\".nav li[data-target=\\\"homePanel\\\"]\").classList.add(\\'active\\');\n  // تفعيل اللوحة الافتراضية عند التحميل"""
    )
    
    # Update the content
    content = content.replace(old_listener_content, new_listener_content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
print("DOMContentLoaded listener updated successfully.")
