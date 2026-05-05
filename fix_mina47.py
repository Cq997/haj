
import re

file_path = "/home/ubuntu/final_push_dir/haj/mina47.html"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# 1. Correct the activatePanel function definition
# This regex looks for the function definition and captures its content
# It\\'s designed to be flexible to variations in whitespace and content within the function
activate_panel_pattern = re.compile(r"""function activatePanel\(targetId\)\{.*?window\.scrollTo\(\{top:0,behavior:\"smooth\"\}\);\s*\}""", re.DOTALL)

# The correct activatePanel function
correct_activate_panel_func = """    function activatePanel(targetId){ 
      document.querySelectorAll(\".nav li\").forEach(i => i.classList.remove(\"active\")); 
      const targetLi = document.querySelector(`.nav li[data-target=\"${targetId}\"]`); // Corrected selector
      if(targetLi) targetLi.classList.add(\"active\"); 
       
      document.querySelectorAll(\".panel\").forEach(panel => { 
        panel.style.display = \"none\"; 
        panel.classList.remove(\"active\"); 
      }); 
       
      const targetPanel = document.getElementById(targetId); 
      if(targetPanel) { 
        targetPanel.style.display = \"block\"; 
        targetPanel.classList.add(\"active\"); 
      } 
      window.scrollTo({top:0,behavior:\"smooth\"}); 
    }"""

# Replace the activatePanel function. If multiple are found, replace all.
content = activate_panel_pattern.sub(correct_activate_panel_func, content)

# 2. Ensure onclick attributes are correctly set on nav items
def fix_nav_items_onclick(match):
    # Extract the data-target value
    data_target = match.group(1)
    # Construct the correct onclick attribute, passing the data-target as a string
    onclick_attr = f"onclick=\"activatePanel(\\'{data_target}\\' )\""
    # Remove the extra space before the closing parenthesis in the onclick attribute
    onclick_attr = onclick_attr.replace(" )", ")")
    # Return the data-target and the new onclick attribute
    return f"data-target=\"{data_target}\" {onclick_attr}"

# Find all nav li items with data-target and potentially existing onclick
# This regex captures the data-target value and optionally matches an existing onclick attribute
content = re.sub(r"data-target=\"([^\"]+)\"(?:\s+onclick=\"[^\"]+\")?", fix_nav_items_onclick, content)

# 3. Ensure homePanel is displayed and others are hidden on load
# This part needs to be carefully placed within the DOMContentLoaded listener
# First, find the DOMContentLoaded listener block
dom_content_loaded_pattern = re.compile(r"""(document\.addEventListener\(\'DOMContentLoaded\', \(\) => \{)(.*?)(?=\}\);)""", re.DOTALL)

def fix_dom_listener(match):
    start = match.group(1)
    body = match.group(2)
    
    # Remove any existing panel display logic to avoid duplicates
    body = re.sub(r"document\.querySelectorAll\(\'\\.panel\'\)\.forEach\(panel => \{.*?\}\);", "", body, flags=re.DOTALL)
    body = re.sub(r"const homePanel = document\.getElementById\(\'homePanel\'\);.*?\}", "", body, flags=re.DOTALL)
    
    initial_logic = """
      document.querySelectorAll(\".panel\").forEach(panel => {
        panel.style.display = \"none\";
        panel.classList.remove(\"active\");
      });
      const homePanel = document.getElementById(\"homePanel\");
      if (homePanel) {
        homePanel.style.display = \"block\";
        homePanel.classList.add(\"active\");
      }
    """
    # Insert the logic right after the DOMContentLoaded opening brace
    return start + initial_logic + body

content = dom_content_loaded_pattern.sub(fix_dom_listener, content)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)
