1) <MVC structure created>

2) <create express/node.js app> express framework

3) <firstly create,layout/structure of our web pages, 
      (a) to common thing in all pages is header and footer,
      (b) ejs install,//SO WE CAN USE  JS AND HTML AT SAME TIME,DYNAMIC FILLING PAGE DATA (DB PICK DATA),VIEW ENGINE ES CODE CONVERT TO HTML
      (c) create layout which include header and footer(common repetitive part so using partial(concept) an separate file create) >

4) <now create header(nav bar) and footer>  


5) <any page create do this 3 steps
      (1) router ,
      (2) controller ,
      (3) ejs file>
6) <create an page for sign Up ,for that we do create router,controller and an ejs file>
   <style sign Up page , header(nav bar) and footer by using sass Middleware>

8) <create an page for Home ,for that we do create router,controller and an  ejs file>
9) <create an page for Profile ,for that we do create router,controller and an ejs file>


7) < create an page for sign In ,for that we do create router,controller and an ejs file>

8) <for signUp user, db create to store data,schema(structure of data,how it look in db) than model , router and action to get that data,redirect to signIn>

9) <for signIn user, router and action to verify login time user enter data from our db,redirect to home where post(img,video),chat engine,connection(friends)>