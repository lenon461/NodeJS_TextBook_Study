## http://34.97.42.76:8016/list 주소로 접속시 데모실행가능

### 1. 실행방법
---
1. schript.sh 실행

2. npm i

3. mongo 실행 및 유저 등록  
~~~
  use admin  
  db.createUser({ user: 'root', pwd: 'root', roles:['root'] })  
  exit
~~~

4. <.env> 파일 작성
~~~
MONGO_ID=root
MONGO_PASSWORD=root

~~~

