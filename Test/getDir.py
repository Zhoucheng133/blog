import os
import ast
import pyperclip

def get_files_without_extension(folder_path):
    try:
        files = [os.path.splitext(file)[0] for file in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, file))]
        formatted_files = [f'"{file}"' for file in files]
        formatted_files_str = ", ".join(formatted_files)
        result = f"[{formatted_files_str}]"
        return result
    except Exception as e:
        print(f"发生错误：{e}")
def sort_key(item):
    t=-1
    try:
        t=int(item.split('_')[0])
    finally:
        return t

# 使用示例
folder_path = "docs/develop/Vue2"
file_names = get_files_without_extension(folder_path)
print(sorted(ast.literal_eval(file_names), key=sort_key))
pyperclip.copy(str(sorted(ast.literal_eval(file_names), key=sort_key)))