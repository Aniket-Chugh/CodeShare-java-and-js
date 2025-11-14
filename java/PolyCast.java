class A {
    void sound() {
        System.err.println("A make sound");
    }
}

class B extends A {
    @Override
    void sound() {
        System.err.println("B make sound");
    }
}

public class PolyCast {

    public static void main(String[] args) {
        B b = new B();
        A a = (A) b;
        // A a = (B) new A();
        // a.msg(); -- will show error
        a.sound();
    }
}
