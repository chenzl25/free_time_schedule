#include <iostream>
#include <vector>
#include <string>
#include <fstream>
#include <map>
#include <cstdlib>
#include <sstream>
#include <cstring>
using namespace std;
string slist[31] = {"Mon_m1", "Tue_m1", "Wed_m1", "Thu_m1", "Fri_m1", "Sat_m1", "Sun_m1",
			"Mon_m2", "Tue_m2", "Wed_m2", "Thu_m2", "Fri_m2",
			"Mon_a1", "Tue_a1", "Wed_a1", "Thu_a1", "Fri_a1", "Sat_a1", "Sun_a1",
			"Mon_a2", "Tue_a2", "Wed_a2", "Thu_a2", "Fri_a2",
			"Mon_d1", "Tue_d1", "Wed_d1", "Thu_d1", "Fri_d1", "Sat_d1", "Sun_d1"};
vector<int> ivec;
map<int, string> m;
struct Student {
	string id;
	string name;
	int time[31];
	Student() {
		memset(time, 0, sizeof(time));
	}
};
int main() {
	for (int i = 0; i < 31; i++) {
		ivec.push_back(i);
	}
	for (int i = 0; i < 31; i++) {
		m[i] = slist[i];
	}
	ofstream out("workers.json");
	ifstream in("workers.txt");
	string s;
	while(getline(in, s)) {
		stringstream ss(s);
		Student stu;
		ss >> stu.id;
		ss >> stu.name;
		string tem;
		while (ss >> tem) {
			int n = atoi(tem.c_str());
			stu.time[n] = true;
		}
		out << '{';
		out << "\"id\":" << '\"' + stu.id + "\",";
		out << "\"name\":" << '\"' + stu.name + "\",";
		out << "\"note\":" << "\"\",";
		out << "\"workTime\":{";
		for (int i = 0; i < 31; i++) {
			out << "\"" + m[i] + "\":";
			if (stu.time[i]) {
				out << "true";
			} else {
				out << "false";
			}
			if (i != 30) {
				out << ',';
			}
		} 
		out << "}}\n";

	}
}