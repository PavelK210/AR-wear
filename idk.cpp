#include <iostream>

using namespace std;

int main() {
    int a;
    int c;
    cin >> a;
    if(a % 3 == 0) {
        cout << "YES" << endl;
        c = a / 3;
        cout << c << endl;
    }
    else {
        cout << "NO";
    }
    return 0;
}
