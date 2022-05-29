import requests
import vk_api
from data import token


session = vk_api.VkApi(token=token)
vk = session.get_api()

def get_user_groups(user_id):
    groups = session.method("groups.get", {'user_id': user_id, 'count': 40})
    print(groups)

input_id = input("Введите id:")
get_user_groups(input_id)

# пример id
# 235283074