import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class QuizServlet extends HttpServlet {

    protected void  doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        int score = 0;
        // http://localhost:8080/QuizServlet/quiz.html
        String q1 = request.getParameter("q1");
        String q2 = request.getParameter("q2");
        String q3 = request.getParameter("q3");

        if ("Delhi".equals(q1)) score++;
        if ("4".equals(q2)) score++;
        if ("Moscow".equals(q3)) score++;

        out.println("<html><body>");
        out.println("<h2>Your Score: " + score + "/3</h2>");

        if (score == 3) {
            out.println("<p>Excellent!</p>");
        } else if (score == 2) {
            out.println("<p>Good job!</p>");
        } 
        else if (score == 1) {
            out.println("<p>Keep trying!</p>");
        } else {
            out.println("<p>Try again!</p>");
        }

        out.println("</body></html>");
    }
}
