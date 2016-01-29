import java.io.*;
import java.net.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Cliente extends Thread{
    private final int portNumber;
    private final String hostName;
    private Socket socket;
    private PrintWriter salida;
    private BufferedReader entrada;
    
    public Cliente(String ip, int puerto){
        hostName = ip;
        portNumber = puerto;
    }
    
    public void conectar(){
        try {
            socket = new Socket(hostName, portNumber);
            salida = new PrintWriter(socket.getOutputStream(), true);
            entrada = new BufferedReader(new InputStreamReader(socket.getInputStream())); 
            start();
            enviarMensaje();
        } catch (UnknownHostException e) {
            System.err.println("Don't know about host " + hostName);
            System.exit(1);
        } catch (IOException e) {
            System.err.println("Couldn't get I/O for the connection to " + hostName);
            System.exit(1);
        } 
    }
    
    @Override
    public void run(){
        recibirMensaje();
    }
    
    public void enviarMensaje(String mensaje){
                salida.println(mensaje);                     
    }
    
    public String recibirMensaje(){
        
        String userInput;
        try {
            userInput = entrada.readLine() 
            return userInput;
            
        } catch (IOException ex) {
            Logger.getLogger(Cliente.class.getName()).log(Level.SEVERE, null, ex);
            return "Fallo";
        }
    }
}
