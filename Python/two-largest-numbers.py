larger = largest = 0;

for i in range(10):
    num = int(input("Enter number: "));
    if num > largest:
        larger = largest;
        largest = num;

    if larger < num < largest:
        larger = num;

print(larger, largest);
