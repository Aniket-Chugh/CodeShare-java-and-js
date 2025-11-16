class Animal {

    static {
        System.out.println("this code is inside the static keyword");
    }

    void sound() {
        System.out.println("Animal make sound");
    }

    Animal() {
        System.out.println("this is the constructor");
    }
}

public class StaticBlock {
    public static void main(String[] args) {
        Animal a = new Animal();
        a.sound();
        a.sound();
        a.sound();
        new Animal();
        new Animal();
        new Animal();

    }
}

// !! Static block - Executes once when class loads.
