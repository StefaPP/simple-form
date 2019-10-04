import { Request, Response } from 'express';
const fs = require('fs');

export class Routes {
  public routes(app): void {
    app.route('/submit')
      .post((req: Request, res: Response) => {
        fs.writeFile(`./file-${new Date().getTime()}.txt`, JSON.stringify(req.body), (err) => {
          if (err) {
            throw new Error("Error writing to file");
          }
          
          res.status(200).send(req.body);
        })
      });

  }
}