import Head from "next/head";

export default function login() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        ></link>
      </Head>
      <div className="container" style={{ marginTop: "75pt" }}>
        <div className="row">
          <div className="col">
            <div className="card w-50 mx-auto">
              <h5 className="card-header">Halaman login</h5>
              <div className="card-body">
                <form method="POST" action="/api/login">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-50"
                    style={{ display: "block", margin: "auto" }}
                  >
                    Login
                  </button>
                </form>
                <div className="mb-3 mt-5">
                  <center>
                    <p className="form-label">
                      Belum memiliki akun?{" "}
                      <a
                        className="form-label"
                        href="/haldaftar"
                        style={{ color: "blue" }}
                      >
                        Daftar
                      </a>
                    </p>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
