import pymysql

HOST= "130.61.52.228"
DATABASE="newsdb"
USER="newsuser"
PASSWORD="sDsd@#E$%&e9d"

conn = pymysql.connect( host=HOST, database=DATABASE, user= USER, password=PASSWORD, charset='utf8')
cursor = conn.cursor()

filename = './.len'

def getalllists():
    sql = """
        select id from news where status=1 order by id desc limit 1
    """
    cursor.execute(sql)
    return cursor.fetchone()

def readtext():
    f = open(filename)
    ret = f.readline()
    f.close()
    return ret

def writetext(num):
    f = open(filename, 'r+')
    f.write(num)
    f.close()

def main():
    lists = getalllists()
    text = readtext()
    lt = str(lists[0])

    if lt == text:
        print(lt)
    else:
        writetext(lt)
        print('')

if __name__ == '__main__':
    main()


