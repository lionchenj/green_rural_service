import { POST } from "common/request";
import { domain } from "common/url";
import Storage from "storage/storage";

const checkLogin = () => {
  return new Promise((res, rej) => {
    Storage.get("user_info").then(async val => {
      if (val) {
        const { username, password, login_time, login_validity } = val;
        let result = await POST(
          domain,
          JSON.stringify({
            method: "user_loginForPhone",
            params: {
              username,
              password
            }
          })
        );
        if (result.code == 200) {
          const current_time = new Date().getTime();
          if (current_time - login_time <= login_validity) {
            Storage.update("user_info", {
              ...result,
              login_time,
              login_validity
            });
            res({
              is_login: true,
              data: { ...result },
              message: "success!"
            });
          } else {
            res({
              is_login: false,
              data: "",
              message: "login expire!"
            });
          }
        } else if (result.code == 999) {
          res({
            is_login: false,
            data: "",
            message: result.msg
          });
        } else {
          rej({
            is_login: false,
            data: "",
            message: result
          });
        }
      } else {
        res({
          is_login: false,
          data: "",
          message: "not login"
        });
      }
    });
  })
    .then()
    .catch(e => console.log(e));
};
export default checkLogin;
