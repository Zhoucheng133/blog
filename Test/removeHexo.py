import os

def remove_content_before_first_hash_in_folder(folder_path):
    try:
        # 遍历文件夹中的所有文件
        for filename in os.listdir(folder_path):
            file_path = os.path.join(folder_path, filename)
            if os.path.isfile(file_path):
                with open(file_path, 'r') as file:
                    lines = file.readlines()
                    for i, line in enumerate(lines):
                        if '#' in line:
                            lines = lines[i:]
                            break

                with open(file_path, 'w') as file:
                    file.writelines(lines)
                print(f"处理完成：{file_path}")
    except Exception as e:
        print(f"发生错误：{e}")

remove_content_before_first_hash_in_folder("docs/develop/React")