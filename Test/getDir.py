import os

def get_files_without_extension(folder_path):
    try:
        files = [os.path.splitext(file)[0] for file in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, file))]
        formatted_files = [f'"{file}"' for file in files]
        formatted_files_str = ", ".join(formatted_files)
        result = f"[{formatted_files_str}]"
        return result
    except Exception as e:
        print(f"发生错误：{e}")

# 使用示例
folder_path = "docs/develop/React"
file_names = get_files_without_extension(folder_path)
print(file_names)