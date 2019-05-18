## http://34.97.42.76:8016/list 주소로 접속시 실행가능

### 1. 실행방법
---
- sh schript.sh

- npm i

- mongo  
  use admin  
  db.createUser({ user: 'user1', pwd: '1234', roles:['root'] })
  exit

- .env
~~~
MONGO_ID=user1
MONGO_PASSWORD=1234

~~~

