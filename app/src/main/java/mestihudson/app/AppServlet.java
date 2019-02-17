package mestihudson.app;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.core.MediaType;

import java.io.IOException;
import java.util.Map;


@WebServlet("/")
public class AppServlet extends HttpServlet {
  @Override
  protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    request.setAttribute("message", message());
    request.getRequestDispatcher("/WEB-INF/views/app/index.jsp").forward(request, response);
  }

  private String message() {
    Map o = ClientBuilder
      .newClient()
      .target("http://172.20.0.6:8080/api/message")
      .request()
      .accept(MediaType.APPLICATION_JSON)
      .get(Map.class)
    ;
    return o.get("message").toString();
  }
}
