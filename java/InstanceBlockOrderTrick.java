
class InstanceBlockOrderTrickTest {
    {
        System.out.println("Instance Block");
    }

    InstanceBlockOrderTrickTest() {
        System.out.println("Constructor");

    }
}

public class InstanceBlockOrderTrick {
    public static void main(String[] args) {
        new InstanceBlockOrderTrickTest() {
        };
    }
}
