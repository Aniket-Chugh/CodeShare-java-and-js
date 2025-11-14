class AnonymousclassA {
    void sound() {
        System.out.println("AnonymousclassA make sound");
    }
}

public class Anonymousclass {
    public static void main(String[] args) {

        AnonymousclassA a = new AnonymousclassA() {
            void sound() {
                System.out.println("AnonymousclassA++ make  sound");
                // this will be the output
            }
        };
        a.sound();
    }
}


