from flask import Flask, render_template, request, redirect, url_for
import sqlite3 as sql
conn = sql.connect('private.db')
c = conn.cursor()

c.execute("""CREATE TABLE IF NOT EXISTS private (
          username TEXT,
          password TEXT,
          progress TEXT,
          Age INTEGER
)""")

conn.commit()

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def meet():
        return render_template('login.html', cala=0)

@app.route('/forward', methods=['POST'])
def ind():
        global name
        name = request.form.get('username')
        global passwd
        passwd = request.form.get('password')
        global umar
        umar = request.form.get('Age')
        value = 1
        with sql.connect('private.db') as conn:
                c = conn.cursor()
                c.execute("select username from private where username = ?",(name,))
                user = c.fetchone()
                if user is None:
                        c.execute("insert into private (username, password, Age) values (?, ?, ?)", (name, passwd, umar))
                        conn.commit()
                        return render_template('index.html', cala=0)
                else:
                       c.execute("select password from private where username = ?", (name,))
                       password =c.fetchone()
                       if passwd == password[0]:
                              cala = 0
                              c.execute("select progress from private where password = ?", (passwd, ))
                              prog = c.fetchone()
                              if prog is None:
                                return render_template('index.html', prog=0, value=value, cala=0)
                              else:
                                  return render_template('index.html', prog=prog, value=value, cala=0)   
                       else:
                               cala=1
                               return render_template('login.html', cala=cala, value=value)    

@app.route('/personal', methods=['POST', 'GET'])
def var():
        return render_template('personal.html', name=name, umar=umar, passwd=passwd)
        # with sql.connect('private.db') as conn:
        #         b = conn.cursor()
        #         b.execute('select ')
        # return render_template('login.html')