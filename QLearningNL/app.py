from http.server import HTTPServer, BaseHTTPRequestHandler
import json

from io import BytesIO

def tprint(number):
    test=bytes("test + {0}".format(number),"utf-8")
    return test

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):


    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        body = self.rfile.read(content_length)
        self.send_response(200)
        self.end_headers()
        response = BytesIO()
        data = json.loads(body.decode('utf-8').replace("'",'"'))
        #####Use body data to call functions
        #####examples:
        print(tprint(data["num"]))
        #####Return JSON Objekt to Client
        returnvalue = json.dumps(data).encode('utf-8')
        response.write(returnvalue)
        self.wfile.write(response.getvalue())


httpd = HTTPServer(('localhost', 8000), SimpleHTTPRequestHandler)
httpd.serve_forever()