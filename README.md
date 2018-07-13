# API on Node.js 

## Запуск демо-проекта

0. Проверить, что инстанс MongoDB запущен
1. Установить зависимости
```npm install```
2. Запустить сервер
```npm start```
3. Наслаждаться)

### Инструкция по API: 
  * __USER__
    * ```GET localhost:1428/api/user``` - возращает список Объектов всех юзеров
    * ```POST localhost:1428/api/user``` - Добавляет юзера в базу с данными переданными в body
      * ```GET localhost:1428/api/user/:id``` - где id - строчка с id Объекта из базы данных. Возращает юзера по іd
      * ```PUT localhost:1428/api/user/:id``` -   изменяет поля переданные в body в юзере по іd
      * ```DELETE localhost:1428/api/user/:id``` - Удаляет юзера из базы    
   
  * __MESSAGES__
    * ```GET localhost:1428/api/message``` - возращает список Объектов всех сообщений
    * ```POST localhost:1428/api/message``` - Добавляет сообщение в базу с данными переданными в body
      * ```GET localhost:1428/api/message/:id``` - где id - строчка с id Объекта из базы данных. Возращает сообщение по іd
      * ```PUT localhost:1428/api/message/:id``` -   изменяет поля переданные в body в сообщении по іd
      * ```DELETE localhost:1428/api/message/:id``` - Удаляет сообщение из базы
   
   
   __Роут, который возвращает всех пользователей, с которыми общался пользователь с данным id.__  
    ```GET localhost:1428/api/user/id/contacts```
   

