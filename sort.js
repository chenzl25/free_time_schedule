var workers = [
{"_id":{"$oid":"55e08958bba67992d67de0b0"},"id":"12346074","name":"欧阳楚旭","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":true,"Fri_m1":true,"Fri_m2":true,"Mon_a1":false,"Mon_a2":false,"Mon_d1":true,"Mon_m1":true,"Mon_m2":true,"Sat_a1":false,"Sat_d1":false,"Sat_m1":false,"Sun_a1":false,"Sun_d1":false,"Sun_m1":false,"Thu_a1":false,"Thu_a2":false,"Thu_d1":true,"Thu_m1":true,"Thu_m2":true,"Tue_a1":false,"Tue_a2":false,"Tue_d1":true,"Tue_m1":true,"Tue_m2":true,"Wed_a1":false,"Wed_a2":false,"Wed_d1":true,"Wed_m1":true,"Wed_m2":true}},
{"_id":{"$oid":"55e08958bba67992d67de0b1"},"id":"13331181","name":"龙嘉伟","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":true,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":false,"Mon_d1":true,"Mon_m1":false,"Mon_m2":false,"Sat_a1":false,"Sat_d1":false,"Sat_m1":false,"Sun_a1":false,"Sun_d1":false,"Sun_m1":false,"Thu_a1":false,"Thu_a2":false,"Thu_d1":true,"Thu_m1":false,"Thu_m2":false,"Tue_a1":false,"Tue_a2":false,"Tue_d1":true,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":true,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0b2"},"id":"13348108","name":"吴泽焕","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":false,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":false,"Mon_d1":false,"Mon_m1":true,"Mon_m2":false,"Sat_a1":false,"Sat_d1":true,"Sat_m1":true,"Sun_a1":false,"Sun_d1":true,"Sun_m1":true,"Thu_a1":false,"Thu_a2":false,"Thu_d1":false,"Thu_m1":false,"Thu_m2":false,"Tue_a1":false,"Tue_a2":false,"Tue_d1":false,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":true,"Wed_m1":true,"Wed_m2":true}},
{"_id":{"$oid":"55e08958bba67992d67de0b3"},"id":"13314032","name":"陈子男","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":false,"Fri_m1":true,"Fri_m2":true,"Mon_a1":false,"Mon_a2":false,"Mon_d1":true,"Mon_m1":false,"Mon_m2":false,"Sat_a1":false,"Sat_d1":false,"Sat_m1":true,"Sun_a1":false,"Sun_d1":false,"Sun_m1":false,"Thu_a1":false,"Thu_a2":false,"Thu_d1":false,"Thu_m1":false,"Thu_m2":false,"Tue_a1":false,"Tue_a2":false,"Tue_d1":false,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":false,"Wed_m1":true,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0b4"},"id":"13365025","name":"黄晓瑞","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":false,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":false,"Mon_d1":false,"Mon_m1":true,"Mon_m2":false,"Sat_a1":false,"Sat_d1":false,"Sat_m1":false,"Sun_a1":false,"Sun_d1":false,"Sun_m1":true,"Thu_a1":false,"Thu_a2":false,"Thu_d1":false,"Thu_m1":true,"Thu_m2":true,"Tue_a1":false,"Tue_a2":false,"Tue_d1":false,"Tue_m1":true,"Tue_m2":true,"Wed_a1":false,"Wed_a2":false,"Wed_d1":false,"Wed_m1":true,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0b5"},"id":"13365002","name":"保雯","note":"","workTime":{"Fri_a1":true,"Fri_a2":true,"Fri_d1":false,"Fri_m1":false,"Fri_m2":false,"Mon_a1":true,"Mon_a2":true,"Mon_d1":false,"Mon_m1":false,"Mon_m2":false,"Sat_a1":false,"Sat_d1":false,"Sat_m1":false,"Sun_a1":false,"Sun_d1":false,"Sun_m1":false,"Thu_a1":true,"Thu_a2":true,"Thu_d1":false,"Thu_m1":true,"Thu_m2":true,"Tue_a1":true,"Tue_a2":true,"Tue_d1":false,"Tue_m1":true,"Tue_m2":true,"Wed_a1":true,"Wed_a2":true,"Wed_d1":false,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0b6"},"id":"13365040","name":"李秋娜","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":true,"Fri_m1":true,"Fri_m2":false,"Mon_a1":false,"Mon_a2":false,"Mon_d1":true,"Mon_m1":true,"Mon_m2":false,"Sat_a1":true,"Sat_d1":true,"Sat_m1":true,"Sun_a1":true,"Sun_d1":true,"Sun_m1":true,"Thu_a1":false,"Thu_a2":false,"Thu_d1":true,"Thu_m1":true,"Thu_m2":true,"Tue_a1":false,"Tue_a2":false,"Tue_d1":true,"Tue_m1":true,"Tue_m2":true,"Wed_a1":false,"Wed_a2":false,"Wed_d1":true,"Wed_m1":true,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0b7"},"id":"13365048","name":"梁泳茵","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":false,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":false,"Mon_d1":false,"Mon_m1":false,"Mon_m2":false,"Sat_a1":false,"Sat_d1":false,"Sat_m1":false,"Sun_a1":false,"Sun_d1":false,"Sun_m1":false,"Thu_a1":false,"Thu_a2":false,"Thu_d1":false,"Thu_m1":false,"Thu_m2":true,"Tue_a1":false,"Tue_a2":false,"Tue_d1":false,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":true,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0b8"},"id":"14302022","name":"陈因","note":"","workTime":{"Fri_a1":true,"Fri_a2":false,"Fri_d1":false,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":false,"Mon_d1":false,"Mon_m1":true,"Mon_m2":false,"Sat_a1":false,"Sat_d1":false,"Sat_m1":false,"Sun_a1":false,"Sun_d1":false,"Sun_m1":false,"Thu_a1":false,"Thu_a2":false,"Thu_d1":false,"Thu_m1":false,"Thu_m2":true,"Tue_a1":false,"Tue_a2":false,"Tue_d1":false,"Tue_m1":true,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":false,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0b9"},"id":"14302055","name":"蓝娟","note":"","workTime":{"Fri_a1":true,"Fri_a2":true,"Fri_d1":true,"Fri_m1":false,"Fri_m2":false,"Mon_a1":true,"Mon_a2":true,"Mon_d1":true,"Mon_m1":false,"Mon_m2":false,"Sat_a1":true,"Sat_d1":true,"Sat_m1":true,"Sun_a1":true,"Sun_d1":true,"Sun_m1":true,"Thu_a1":true,"Thu_a2":true,"Thu_d1":true,"Thu_m1":false,"Thu_m2":true,"Tue_a1":true,"Tue_a2":true,"Tue_d1":true,"Tue_m1":false,"Tue_m2":false,"Wed_a1":true,"Wed_a2":true,"Wed_d1":true,"Wed_m1":true,"Wed_m2":true}},
{"_id":{"$oid":"55e08958bba67992d67de0ba"},"id":"14307092","name":"龙有园","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":false,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":true,"Mon_d1":true,"Mon_m1":false,"Mon_m2":false,"Sat_a1":false,"Sat_d1":false,"Sat_m1":false,"Sun_a1":false,"Sun_d1":false,"Sun_m1":true,"Thu_a1":false,"Thu_a2":false,"Thu_d1":true,"Thu_m1":false,"Thu_m2":false,"Tue_a1":false,"Tue_a2":true,"Tue_d1":true,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":true,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0bb"},"id":"14307102","name":"毛星星","note":"","workTime":{"Fri_a1":true,"Fri_a2":true,"Fri_d1":true,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":true,"Mon_d1":true,"Mon_m1":false,"Mon_m2":false,"Sat_a1":true,"Sat_d1":true,"Sat_m1":true,"Sun_a1":true,"Sun_d1":true,"Sun_m1":true,"Thu_a1":false,"Thu_a2":true,"Thu_d1":true,"Thu_m1":false,"Thu_m2":false,"Tue_a1":false,"Tue_a2":true,"Tue_d1":true,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":true,"Wed_d1":true,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0bc"},"id":"14311040","name":"邢森","note":"","workTime":{"Fri_a1":false,"Fri_a2":true,"Fri_d1":false,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":false,"Mon_d1":false,"Mon_m1":false,"Mon_m2":false,"Sat_a1":true,"Sat_d1":false,"Sat_m1":false,"Sun_a1":false,"Sun_d1":false,"Sun_m1":false,"Thu_a1":false,"Thu_a2":true,"Thu_d1":true,"Thu_m1":false,"Thu_m2":false,"Tue_a1":false,"Tue_a2":false,"Tue_d1":false,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":true,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0bd"},"id":"14307103","name":"梅笑寒","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":true,"Fri_m1":false,"Fri_m2":true,"Mon_a1":false,"Mon_a2":false,"Mon_d1":true,"Mon_m1":false,"Mon_m2":false,"Sat_a1":false,"Sat_d1":false,"Sat_m1":false,"Sun_a1":false,"Sun_d1":false,"Sun_m1":false,"Thu_a1":false,"Thu_a2":false,"Thu_d1":true,"Thu_m1":false,"Thu_m2":false,"Tue_a1":false,"Tue_a2":false,"Tue_d1":true,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":true,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0be"},"id":"14314010","name":"曹艳","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":true,"Fri_m1":true,"Fri_m2":true,"Mon_a1":false,"Mon_a2":false,"Mon_d1":true,"Mon_m1":true,"Mon_m2":true,"Sat_a1":true,"Sat_d1":true,"Sat_m1":true,"Sun_a1":true,"Sun_d1":true,"Sun_m1":true,"Thu_a1":false,"Thu_a2":false,"Thu_d1":true,"Thu_m1":true,"Thu_m2":true,"Tue_a1":false,"Tue_a2":false,"Tue_d1":true,"Tue_m1":true,"Tue_m2":false,"Wed_a1":true,"Wed_a2":true,"Wed_d1":false,"Wed_m1":true,"Wed_m2":true}},
{"_id":{"$oid":"55e08958bba67992d67de0bf"},"id":"14323069","name":"吴佳","note":"","workTime":{"Fri_a1":false,"Fri_a2":true,"Fri_d1":true,"Fri_m1":false,"Fri_m2":true,"Mon_a1":false,"Mon_a2":true,"Mon_d1":true,"Mon_m1":false,"Mon_m2":true,"Sat_a1":false,"Sat_d1":true,"Sat_m1":true,"Sun_a1":false,"Sun_d1":true,"Sun_m1":false,"Thu_a1":false,"Thu_a2":false,"Thu_d1":true,"Thu_m1":false,"Thu_m2":false,"Tue_a1":false,"Tue_a2":false,"Tue_d1":true,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":true,"Wed_d1":true,"Wed_m1":false,"Wed_m2":true}},
{"_id":{"$oid":"55e08958bba67992d67de0c0"},"id":"14331048","name":"陈梓麟","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":false,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":false,"Mon_d1":false,"Mon_m1":false,"Mon_m2":false,"Sat_a1":false,"Sat_d1":false,"Sat_m1":false,"Sun_a1":false,"Sun_d1":false,"Sun_m1":false,"Thu_a1":false,"Thu_a2":false,"Thu_d1":false,"Thu_m1":false,"Thu_m2":false,"Tue_a1":true,"Tue_a2":false,"Tue_d1":true,"Tue_m1":false,"Tue_m2":false,"Wed_a1":true,"Wed_a2":false,"Wed_d1":true,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0c1"},"id":"14324092","name":"夏文","note":"","workTime":{"Fri_a1":false,"Fri_a2":true,"Fri_d1":true,"Fri_m1":false,"Fri_m2":false,"Mon_a1":true,"Mon_a2":true,"Mon_d1":true,"Mon_m1":false,"Mon_m2":true,"Sat_a1":true,"Sat_d1":true,"Sat_m1":true,"Sun_a1":true,"Sun_d1":true,"Sun_m1":true,"Thu_a1":false,"Thu_a2":true,"Thu_d1":true,"Thu_m1":false,"Thu_m2":false,"Tue_a1":false,"Tue_a2":true,"Tue_d1":true,"Tue_m1":false,"Tue_m2":false,"Wed_a1":true,"Wed_a2":true,"Wed_d1":true,"Wed_m1":false,"Wed_m2":true}},
{"_id":{"$oid":"55e08958bba67992d67de0c2"},"id":"14331084","name":"何晋豪","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":false,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":false,"Mon_d1":true,"Mon_m1":false,"Mon_m2":false,"Sat_a1":false,"Sat_d1":false,"Sat_m1":false,"Sun_a1":false,"Sun_d1":false,"Sun_m1":false,"Thu_a1":false,"Thu_a2":false,"Thu_d1":true,"Thu_m1":false,"Thu_m2":false,"Tue_a1":false,"Tue_a2":false,"Tue_d1":true,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":true,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0c3"},"id":"14352035","name":"许仕琳","note":"","workTime":{"Fri_a1":false,"Fri_a2":true,"Fri_d1":false,"Fri_m1":false,"Fri_m2":true,"Mon_a1":false,"Mon_a2":true,"Mon_d1":false,"Mon_m1":false,"Mon_m2":true,"Sat_a1":false,"Sat_d1":true,"Sat_m1":false,"Sun_a1":true,"Sun_d1":false,"Sun_m1":false,"Thu_a1":false,"Thu_a2":true,"Thu_d1":false,"Thu_m1":false,"Thu_m2":true,"Tue_a1":false,"Tue_a2":true,"Tue_d1":false,"Tue_m1":false,"Tue_m2":true,"Wed_a1":false,"Wed_a2":true,"Wed_d1":false,"Wed_m1":false,"Wed_m2":true}},
{"_id":{"$oid":"55e08958bba67992d67de0c4"},"id":"14352036","name":"郑林林","note":"","workTime":{"Fri_a1":false,"Fri_a2":true,"Fri_d1":false,"Fri_m1":false,"Fri_m2":true,"Mon_a1":false,"Mon_a2":true,"Mon_d1":false,"Mon_m1":false,"Mon_m2":true,"Sat_a1":false,"Sat_d1":true,"Sat_m1":false,"Sun_a1":true,"Sun_d1":false,"Sun_m1":false,"Thu_a1":false,"Thu_a2":true,"Thu_d1":false,"Thu_m1":false,"Thu_m2":true,"Tue_a1":false,"Tue_a2":true,"Tue_d1":false,"Tue_m1":false,"Tue_m2":true,"Wed_a1":false,"Wed_a2":true,"Wed_d1":false,"Wed_m1":false,"Wed_m2":true}},
{"_id":{"$oid":"55e08958bba67992d67de0c5"},"id":"14352025","name":"杨然","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":true,"Fri_m1":false,"Fri_m2":false,"Mon_a1":true,"Mon_a2":true,"Mon_d1":true,"Mon_m1":true,"Mon_m2":true,"Sat_a1":false,"Sat_d1":true,"Sat_m1":false,"Sun_a1":false,"Sun_d1":true,"Sun_m1":false,"Thu_a1":false,"Thu_a2":false,"Thu_d1":true,"Thu_m1":false,"Thu_m2":false,"Tue_a1":false,"Tue_a2":false,"Tue_d1":true,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":true,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0c6"},"id":"14352038","name":"涂嘉莉","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":false,"Fri_m1":true,"Fri_m2":true,"Mon_a1":false,"Mon_a2":false,"Mon_d1":false,"Mon_m1":true,"Mon_m2":true,"Sat_a1":false,"Sat_d1":false,"Sat_m1":false,"Sun_a1":false,"Sun_d1":false,"Sun_m1":false,"Thu_a1":false,"Thu_a2":false,"Thu_d1":false,"Thu_m1":true,"Thu_m2":true,"Tue_a1":false,"Tue_a2":false,"Tue_d1":false,"Tue_m1":true,"Tue_m2":true,"Wed_a1":false,"Wed_a2":false,"Wed_d1":false,"Wed_m1":true,"Wed_m2":true}},
{"_id":{"$oid":"55e08958bba67992d67de0c7"},"id":"14352810","name":"张艳红","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":true,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":false,"Mon_d1":true,"Mon_m1":false,"Mon_m2":false,"Sat_a1":false,"Sat_d1":true,"Sat_m1":false,"Sun_a1":false,"Sun_d1":true,"Sun_m1":false,"Thu_a1":false,"Thu_a2":false,"Thu_d1":true,"Thu_m1":false,"Thu_m2":false,"Tue_a1":false,"Tue_a2":false,"Tue_d1":true,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":true,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0c8"},"id":"14366070","name":"罗优","note":"","workTime":{"Fri_a1":false,"Fri_a2":true,"Fri_d1":true,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":true,"Mon_d1":true,"Mon_m1":false,"Mon_m2":false,"Sat_a1":true,"Sat_d1":true,"Sat_m1":true,"Sun_a1":false,"Sun_d1":false,"Sun_m1":false,"Thu_a1":true,"Thu_a2":true,"Thu_d1":true,"Thu_m1":true,"Thu_m2":true,"Tue_a1":false,"Tue_a2":true,"Tue_d1":false,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":true,"Wed_d1":true,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0c9"},"id":"14366103","name":"虞婷","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":true,"Fri_m1":false,"Fri_m2":true,"Mon_a1":true,"Mon_a2":true,"Mon_d1":true,"Mon_m1":false,"Mon_m2":false,"Sat_a1":true,"Sat_d1":true,"Sat_m1":true,"Sun_a1":true,"Sun_d1":true,"Sun_m1":true,"Thu_a1":false,"Thu_a2":false,"Thu_d1":true,"Thu_m1":false,"Thu_m2":true,"Tue_a1":false,"Tue_a2":false,"Tue_d1":false,"Tue_m1":false,"Tue_m2":false,"Wed_a1":true,"Wed_a2":true,"Wed_d1":true,"Wed_m1":false,"Wed_m2":true}},
{"_id":{"$oid":"55e08958bba67992d67de0ca"},"id":"14367018","name":"黄立琼","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":false,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":false,"Mon_d1":false,"Mon_m1":false,"Mon_m2":false,"Sat_a1":false,"Sat_d1":false,"Sat_m1":false,"Sun_a1":true,"Sun_d1":true,"Sun_m1":true,"Thu_a1":true,"Thu_a2":true,"Thu_d1":true,"Thu_m1":true,"Thu_m2":true,"Tue_a1":false,"Tue_a2":false,"Tue_d1":false,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":false,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0cb"},"id":"14367031","name":"李金芸","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":true,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":false,"Mon_d1":false,"Mon_m1":false,"Mon_m2":false,"Sat_a1":true,"Sat_d1":true,"Sat_m1":true,"Sun_a1":true,"Sun_d1":true,"Sun_m1":true,"Thu_a1":false,"Thu_a2":false,"Thu_d1":true,"Thu_m1":false,"Thu_m2":false,"Tue_a1":false,"Tue_a2":false,"Tue_d1":false,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":true,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0cc"},"id":"14331130","name":"李伽泽","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":false,"Fri_m1":false,"Fri_m2":false,"Mon_a1":true,"Mon_a2":true,"Mon_d1":true,"Mon_m1":true,"Mon_m2":true,"Sat_a1":true,"Sat_d1":true,"Sat_m1":true,"Sun_a1":true,"Sun_d1":true,"Sun_m1":true,"Thu_a1":false,"Thu_a2":false,"Thu_d1":false,"Thu_m1":false,"Thu_m2":false,"Tue_a1":true,"Tue_a2":true,"Tue_d1":true,"Tue_m1":true,"Tue_m2":true,"Wed_a1":true,"Wed_a2":true,"Wed_d1":true,"Wed_m1":true,"Wed_m2":true}},
{"_id":{"$oid":"55e08958bba67992d67de0cd"},"id":"14352092","name":"胡芷君","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":false,"Fri_m1":true,"Fri_m2":true,"Mon_a1":false,"Mon_a2":false,"Mon_d1":false,"Mon_m1":true,"Mon_m2":true,"Sat_a1":false,"Sat_d1":false,"Sat_m1":false,"Sun_a1":false,"Sun_d1":false,"Sun_m1":false,"Thu_a1":false,"Thu_a2":false,"Thu_d1":false,"Thu_m1":true,"Thu_m2":true,"Tue_a1":false,"Tue_a2":false,"Tue_d1":false,"Tue_m1":true,"Tue_m2":true,"Wed_a1":false,"Wed_a2":false,"Wed_d1":false,"Wed_m1":true,"Wed_m2":true}},
{"_id":{"$oid":"55e08958bba67992d67de0ce"},"id":"14367050","name":"欧阳钰玲","note":"","workTime":{"Fri_a1":false,"Fri_a2":true,"Fri_d1":false,"Fri_m1":true,"Fri_m2":true,"Mon_a1":false,"Mon_a2":false,"Mon_d1":false,"Mon_m1":true,"Mon_m2":false,"Sat_a1":false,"Sat_d1":false,"Sat_m1":true,"Sun_a1":false,"Sun_d1":false,"Sun_m1":true,"Thu_a1":false,"Thu_a2":true,"Thu_d1":false,"Thu_m1":true,"Thu_m2":true,"Tue_a1":false,"Tue_a2":false,"Tue_d1":false,"Tue_m1":true,"Tue_m2":false,"Wed_a1":false,"Wed_a2":true,"Wed_d1":false,"Wed_m1":true,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0cf"},"id":"14367038","name":"林锶蓉","note":"","workTime":{"Fri_a1":true,"Fri_a2":true,"Fri_d1":false,"Fri_m1":true,"Fri_m2":true,"Mon_a1":false,"Mon_a2":false,"Mon_d1":false,"Mon_m1":true,"Mon_m2":false,"Sat_a1":true,"Sat_d1":false,"Sat_m1":true,"Sun_a1":true,"Sun_d1":false,"Sun_m1":true,"Thu_a1":true,"Thu_a2":true,"Thu_d1":false,"Thu_m1":true,"Thu_m2":true,"Tue_a1":true,"Tue_a2":false,"Tue_d1":false,"Tue_m1":true,"Tue_m2":false,"Wed_a1":true,"Wed_a2":true,"Wed_d1":false,"Wed_m1":true,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0d0"},"id":"14367048","name":"明文良","note":"","workTime":{"Fri_a1":false,"Fri_a2":true,"Fri_d1":false,"Fri_m1":false,"Fri_m2":true,"Mon_a1":false,"Mon_a2":false,"Mon_d1":false,"Mon_m1":false,"Mon_m2":false,"Sat_a1":false,"Sat_d1":true,"Sat_m1":true,"Sun_a1":true,"Sun_d1":true,"Sun_m1":false,"Thu_a1":false,"Thu_a2":true,"Thu_d1":false,"Thu_m1":false,"Thu_m2":true,"Tue_a1":false,"Tue_a2":false,"Tue_d1":false,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":false,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0d1"},"id":"14347150","name":"张跃佳","note":"","workTime":{"Fri_a1":false,"Fri_a2":false,"Fri_d1":true,"Fri_m1":false,"Fri_m2":false,"Mon_a1":false,"Mon_a2":false,"Mon_d1":true,"Mon_m1":true,"Mon_m2":true,"Sat_a1":false,"Sat_d1":true,"Sat_m1":true,"Sun_a1":false,"Sun_d1":true,"Sun_m1":true,"Thu_a1":false,"Thu_a2":false,"Thu_d1":false,"Thu_m1":false,"Thu_m2":false,"Tue_a1":false,"Tue_a2":false,"Tue_d1":false,"Tue_m1":false,"Tue_m2":false,"Wed_a1":false,"Wed_a2":false,"Wed_d1":true,"Wed_m1":false,"Wed_m2":false}},
{"_id":{"$oid":"55e08958bba67992d67de0d2"},"id":"14367063","name":"魏腾曲","note":"","workTime":{"Fri_a1":true,"Fri_a2":true,"Fri_d1":true,"Fri_m1":false,"Fri_m2":true,"Mon_a1":false,"Mon_a2":false,"Mon_d1":false,"Mon_m1":false,"Mon_m2":false,"Sat_a1":true,"Sat_d1":true,"Sat_m1":false,"Sun_a1":true,"Sun_d1":true,"Sun_m1":false,"Thu_a1":true,"Thu_a2":true,"Thu_d1":true,"Thu_m1":false,"Thu_m2":true,"Tue_a1":false,"Tue_a2":false,"Tue_d1":true,"Tue_m1":false,"Tue_m2":true,"Wed_a1":false,"Wed_a2":false,"Wed_d1":false,"Wed_m1":false,"Wed_m2":false}}
]

var MAX_WEEKEND_NUM = 1;
var MAX_WORK_TIME = 16;
var MAX_WORKERS = 5;
for (var i in workers) {
	workers[i].total = 0;
	workers[i].weekend = 0;
}
var getWorkersByName = function(name) {
	for (var i in workers) {
		if (workers[i].name == name) {
			return workers[i];
		}
	}
}
var fs = require('fs');
var time = ["Fri_a1","Fri_a2","Fri_d1","Fri_m1","Fri_m2","Mon_a1","Mon_a2","Mon_d1","Mon_m1","Mon_m2","Sat_a1","Sat_d1","Sat_m1","Sun_a1","Sun_d1","Sun_m1","Thu_a1","Thu_a2","Thu_d1","Thu_m1","Thu_m2","Tue_a1","Tue_a2","Tue_d1","Tue_m1","Tue_m2","Wed_a1","Wed_a2","Wed_d1","Wed_m1","Wed_m2"];
var worker_size = 0;
for (var tem in workers) {
	worker_size++;
}
var table = [];
for (var i in time) {
	table.push([]);
}
for (var i = 0; i < worker_size; i++) {
	var name = workers[i].name;
	var index = 0;
	for (var key in workers[i].workTime) {
		if (workers[i].workTime[key] === true) {
			table[index].push(name);
		}
		index++;
	}
}
// var data = "";
// for (var i in time) {
// 	data += (time[i]+':');
// 	for (var name of table[i]) {
// 		data += (name+', ');
// 	}
// 	data += '\n';
// }
// fs.writeFile('sort.txt', data, function(err) {
// 	console.log('write end');
// });
var only_one = [2,7,10,11,12,13,14,15,18,23,28];
var weekend_table = [];
var weekday_table = [];
for (var i in table) {
	if (only_one.indexOf(parseInt(i)) > -1) {
		weekend_table.push({time:time[i], workers:table[i]});
		console.log(i,time[i]);
	}
	else{
		weekday_table.push({time:time[i], workers:table[i]});
		console.log(i,time[i]);
	}
}
function my_sort(obj1, obj2) {
	if (obj1.workers.length > obj2.workers.length) {
		return 1;
	} else {
		return -1;
	}
}
weekend_table.sort(my_sort);
weekday_table.sort(my_sort);
var weekend_ans = [];
var weekday_ans = [];
for (var i in weekend_table) {
	weekend_ans[i] = {time:weekend_table[i].time,workers:[]};
}
for (var i in weekday_table) {
	weekday_ans[i] = {time:weekday_table[i].time,workers:[]};
}

//sort the weekend
for (var i in weekend_table) {
	while(weekend_ans[i].workers.length < MAX_WORKERS && weekend_table[i].workers.length > 0) {
		var person = weekend_table[i].workers.shift();
		var worker = getWorkersByName(person);
		if (worker.total <= MAX_WORK_TIME-3) {
			weekend_ans[i].workers.push(person);
			if (weekend_table[i].time.indexOf('d1') > -1) {
				worker.total += 3.5;
			} else {
				worker.total += 3;
			}
			worker.weekend++;
			if (worker.weekend >= MAX_WEEKEND_NUM) {
				for (var k in weekend_table) {
					weekend_table[k].workers = weekend_table[k].workers.filter(function(val) {
						if (val == person) {
							return false;
						} else {
							return true;
						}
					});
				}
			}
		}
	}
	for (var j in weekend_table) {
		weekend_table[j].workers.sort(function(name_a,name_b) {
			var worker_a = getWorkersByName(name_a);
			var worker_b = getWorkersByName(name_b);
			if (worker_a.total > worker_b.total) {
				return 1;
			} else {
				return -1;
			}
		});
	}
}
//sort the weekday
for (var i in weekday_table) {
	// console.log(i);
	for (var j in weekday_table) {
		weekday_table[j].workers.sort(function(name_a,name_b) {
			var worker_a = getWorkersByName(name_a);
			var worker_b = getWorkersByName(name_b);
			if (worker_a.total > worker_b.total) {
				return 1;
			} else {
				return -1;
			}
		});
	}
	while(weekday_ans[i].workers.length < MAX_WORKERS && weekday_table[i].workers.length > 0) {
		var person = weekday_table[i].workers.shift();
		var worker = getWorkersByName(person)
		if (worker.total <= MAX_WORK_TIME-2) {
			weekday_ans[i].workers.push(person);
			worker.total += 2
		}
	}
}
var ans = [];
for (var i in weekend_ans) {
	ans.push(weekend_ans[i]);
}
for (var j in weekday_ans) {
	ans.push(weekday_ans[j]);
}
var map = { 
"Mon_m1":"星期一08:00-10:00","Mon_m2":"星期一10:00-12:00","Mon_a1":"星期一13:00-15:00","Mon_a2":"星期一:15:00-17:00","Mon_d1":"星期一19:00-22:30","Tue_m1":"星期二08:00-10:00","Tue_m2":"星期二10:00-12:00","Tue_a1":"星期二13:00-15:00","Tue_a2":"星期二15:00-17:00","Tue_d1":"星期二19:00-22:30",
"Wed_m1":"星期三08:00-10:00","Wed_m2":"星期三10:00-12:00","Wed_a1":"星期三13:00-15:00","Wed_a2":"星期三15:00-17:00","Wed_d1":"星期三19:00-22:30","Thu_m1":"星期四08:00-10:00","Thu_m2":"星期四10：00-12:00","Thu_a1":"星期四13:00-15:00","Thu_a2":"星期四15:00-17:00","Thu_d1":"星期四19:00-22:30",
"Fri_m1":"星期五08:00-10:00","Fri_m2":"星期五10:00-12:00","Fri_a1":"星期五13:00-15:00","Fri_a2":"星期五15:00-17:00","Fri_d1":"星期五19:00-22:30",
"Sat_m1":"星期六08:30-11:30","Sat_a1":"星期六14:00-17:00","Sat_d1":"星期六19:00-22:30",
"Sun_m1":"星期天08:30-11:30","Sun_a1":"星期天14:00-17:00","Sun_d1":"星期天19:00-22:30"};
//sort the day
for (var i in ans) {
	ans[i].time = map[ans[i].time];
}
ans.sort(function(obj1, obj2) {
	if (obj1.time > obj2.time) {
		return 1;
	} else {
		return -1;
	}
});
var data = "";
// for (var i in ans) {
// 	data += ans[i].time + ' : ';
// 	for (var name of ans[i].workers) {
// 		data += name + ',';
// 	}
// 	data += '\n';
// }
for (var i in ans) {
	data += ans[i].time + ' : ';
	for (var name of ans[i].workers) {
		data += name + ',';
	}
	data += '\n';
}
for (var i in workers) {
	data += workers[i].name + ' : ' + workers[i].total + '\n';
}
// var ans=[];
// for (var i in time) {
// 	ans[i] = new Array();
// }
// for (var i of only_one) {
// 	while(ans[i].length < 6 && table[i].length > 0) {
// 		var person = table[i].shift();
// 		ans[i].push(person);
// 		var worker = getWorkersByName(person);
// 		if (i == 11 || i == 13 || i == 14 || i ==16) {
// 			worker.total += 3;
// 		} else {
// 			worker.total += 3.5;
// 		}
// 		worker.weekend++;
// 		if (worker.weekend >= MAX_WEEKEND_NUM) {
// 			for (var k of only_one) {
// 				table[k] = table[k].filter(function(val) {
// 					if (val == person) {
// 						return false;
// 					} else {
// 						return true;
// 					}
// 				});
// 			}
// 		}
// 	}
// 	for (var j in table) {
// 		table[j].sort(function(name_a,name_b) {
// 			var worker_a = getWorkersByName(name_a);
// 			var worker_b = getWorkersByName(name_b);
// 			if (worker_a.total > worker_b.total) {
// 				return true;
// 			} else {
// 				return false;
// 			}
// 		});
// 	}
// }
// console.log('the weekend end \n now the weekday begin');
// var others = [0,1,3,4,5,6,8,9,16,17,19,20,21,22,24,25,26,27,29,30];

// for (var i of others) {
// 	console.log(i);
// 	while(ans[i].length < 6 && table[i].length > 0) {
// 		var person = table[i].shift();
// 		var worker = getWorkersByName(person)
// 		if (worker.total <= MAX_WORK_TIME-2) {
// 			ans[i].push(person);
// 			worker.total += 2
// 		}
// 	}
// 	for (var j in table) {
// 		table[j].sort(function(name_a,name_b) {
// 			var worker_a = getWorkersByName(name_a);
// 			var worker_b = getWorkersByName(name_b);
// 			if (worker_a.total > worker_b.total) {
// 				return true;
// 			} else {
// 				return false;
// 			}
// 		});
// 	}
// }
// var data = "";
// for (var i in time) {
// 	data += (time[i]+':');
// 	for (var name of ans[i]) {
// 		data += (name+', ');
// 	}
// 	data += '\n';
// }
// for (var i in workers) {
// 	data += workers[i].name + ' : ' + workers[i].total + '\n:';
// }
fs.writeFile('ans.txt', data, function(err) {
	console.log('write end');
});