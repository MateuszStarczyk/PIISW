var sum = 0;
for (var i = 0; i < arguments.length; ++i) {
    sum += +arguments[i];
}
if (i % 2)
    sum++;
else
    sum--;
print(sum);
