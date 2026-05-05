
import re

file_path = "/home/ubuntu/final_push_dir/haj/mina47.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. إزالة قاعدة CSS المتعارضة
content = content.replace(".panel.active.hidden{display:block!important}", "")

# 2. تعديل دالة activatePanel
# البحث عن دالة activatePanel بالكامل
activate_panel_regex = r"(function activatePanel\(targetId\)\{.*?window\.scrollTo\(\{top:0,behavior:\'smooth\'\}\);\s*\})";
match = re.search(activate_panel_regex, content, re.DOTALL)

if match:
    old_activate_panel_func = match.group(1)
    new_activate_panel_func = old_activate_panel_func \
        .replace("document.querySelectorAll(\".panel\").forEach(panel => panel.classList.remove(\'active\'));", "document.querySelectorAll(\".panel\").forEach(panel => panel.style.display = \'none\');") \
        .replace("document.getElementById(targetId)?.classList.add(\'active\');", "if(document.getElementById(targetId)) document.getElementById(targetId).style.display = \'block\';")
    content = content.replace(old_activate_panel_func, new_activate_panel_func)

# 3. تعيين العرض الأولي للوحات
# إخفاء جميع اللوحات افتراضيًا
content = re.sub(r"(<section class=\"panel\" id=\"(?!homePanel)\"[^>]*?)>", r"\1 style=\"display: none;\">", content)
# إظهار homePanel افتراضيًا
content = content.replace("<section class=\"panel\" id=\"homePanel\">", "<section class=\"panel\" id=\"homePanel\" style=\"display: block;\">")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("تم تطبيق التعديلات بنجاح على mina47.html")
