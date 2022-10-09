#include <stdio.h>

int main() {
	int i, larger = 0, largest = 0;

	for (i = 0; i < 10; i++) {
		int num;
		printf("Enter number: ");
		scanf("%d", &num);
	    if (num > largest) {
	        larger = largest;
	        largest = num;
	    }
	    if (num > larger && num < largest)
	        larger = num;
	}
	
	printf("%d, %d", larger, largest);
	
	return 0;
}




