import re

file_path = "/home/ubuntu/final_push_dir/haj/mina47.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Fix activatePanel function
activate_panel_func = """    function activatePanel(targetId){
      document.querySelectorAll('.nav li').forEach(i => i.classList.remove('active'));
      const targetLi = document.querySelector(`.nav li[data-target="${targetId}"]`);
      if(targetLi) targetLi.classList.add('active');
      
      document.querySelectorAll('.panel').forEach(panel => {
        panel.style.display = 'none';
        panel.classList.remove('active');
      });
      
      const targetPanel = document.getElementById(targetId);
      if(targetPanel) {
        targetPanel.style.display = 'block';
        targetPanel.classList.add('active');
      }
      window.scrollTo({top:0,behavior:'smooth'});
    }"""

content = re.sub(r"    function activatePanel\(targetId\)\{.*?\n    \}", activate_panel_func, content, flags=re.DOTALL)

# 2. Ensure onclick attributes are correctly set on nav items
def fix_nav_items(match):
    target = match.group(1)
    # Remove any existing onclick to avoid duplicates, then add the correct one
    return f"data-target=\"{target}\" onclick=\"activatePanel(\\'{target}\\\')\""

content = re.sub(r"data-target=\"([^\"]+)\"(?:\s+onclick=\"[^\"]+\")?", fix_nav_items, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
