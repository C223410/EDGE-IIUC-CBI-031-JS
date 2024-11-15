/*#include <bits/stdc++.h>
#include <array>
#include <utility>
#include <numeric>
using namespace std;

#define ff first
#define ss second
#define pb push_back
#define all(x) (x).begin(), (x).end()
#define rall(x) (x).rbegin(), (x).rend()
#define rsort(x) sort((x).rbegin(), (x).rend())
#define clr(cnt, x) memset((cnt), (x), sizeof(cnt))
#define translow(x) transform((x).begin(), (x).end(), (x).begin(), ::tolower)
#define sz(n) (int)(n).size()
#define FOR(i, a, b) for (ll i = a; i < (b); i++)
#define max_in_arr(a) *max_element(a.begin(), a.end());
#define min_in_arr(vec) min_element(vec.begin(), vec.end());
#define PI 2 * acos(0)
#define YES cout << "YES" << endl
#define NO cout << "NO" << endl
#define Yes cout << "Yes" << endl
#define No cout << "No" << endl
#define YESR                   \
    {                          \
        cout << "YES" << endl; \
        return;                \
    }
#define NOR                   \
    {                         \
        cout << "NO" << endl; \
        return;               \
    }
#define YesR                   \
    {                          \
        cout << "Yes" << endl; \
        return;                \
    }
#define NoR                   \
    {                         \
        cout << "No" << endl; \
        return;               \
    }
#define maxint INT_MAX
#define maxll 9223372036854775807
#define EL cout << endl
#define ELR       \
    cout << endl; \
    return
#define GCD __gcd
#define mp make_pair
#define EPS 1e-12
#define pdd pair<double, double>

typedef string str;
typedef long long ll;
typedef unsigned long long ull;
typedef vector<int> vi;
typedef vector<ll> vl;
typedef vector<pair<int, int>> vii;
typedef pair<int, int> pii;
typedef vector<bool> vbl;
typedef vector<pair<ll, ll>> vll;
typedef vector<vector<int>> vvi;
typedef vector<vector<ll>> vvl;
typedef pair<ll, ll> pll;
ll mod = 1000000007;

void solve1()
{
    /// https://codeforces.com/ B
    ll n, x, y, cnt = 0, sum = 0;
    cin >> n;

    vl a(n);
    FOR(i, 0, n)
    cin >> a[i], sum += a[i];

    FOR(i, 1, n)
    if (a[i] < a[i - 1])
    {
        // cout << i << " " << i - 1 << endl;
        y = a[i] + a[i - 1];
        x = floor(y / 2);

        if (y % 2)
            a[i] = x + 1, a[i - 1] = x;
        else
            a[i] = a[i - 1] = x;
        i -= 2;
    }
    // FOR(i,0,n)cout<<a[i];
    // EL;
    set<ll> s(all(a));
    (sz(s) == 1) ? YES : NO;
}

void solve()
{
    string s;
    bool f=true;
    cin>>s;
    int l = sz(s);
    FOR(i,1,l) 
        if (s[i] == s[i - 1]) {
            cout << s.substr(0, i) << (s[i] == 'a' ? 'b' : 'a') << s.substr(i) ;
            ELR;
        }
    
    s += s.back() == 'a' ? 'b' : 'a';
    cout << s;
    ELR;
}
int main()
{
    ll T = 1;
    // cout<<"Test Case: "<<endl;
    cin >> T;
    while (T--)
        solve();

    return 0;
}
*/
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readline() {
    return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();


function main() {
    var t = parseInt(readline());
    while(t--){
        var a = readline().split(" ");
        a = a.map(x => parseInt(x));
        var n = BigInt(a[0]), k = BigInt(a[1]);

        var sum = (k * (BigInt(2) * n + k - BigInt(1))) / BigInt(2); 
        
        var ans = sum % BigInt(2) === BigInt(0) ? "YES" : "NO";
        console.log(ans);
    }
    
}
