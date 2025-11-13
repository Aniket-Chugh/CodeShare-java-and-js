class A1 {
    {
        System.out.println("Instance Block");
    }

    A1() {
        System.out.println("Constructor");
    }

}

public class instanceBlock {
    public static void main(String[] args) {
        new A1();
    }
}
