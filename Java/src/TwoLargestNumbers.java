import java.util.Scanner;

public class TwoLargestNumbers {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int larger = 0, largest = 0;

        for (int i = 0; i < 10; i++) {
            int num = input.nextInt();

            if (num > largest) {
                larger = largest;
                largest = num;
            }
            if (num > larger && num < largest)
                larger = num;
        }
        System.out.printf("%d, %d", larger, largest);
    }

}








