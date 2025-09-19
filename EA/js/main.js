// 'js/mian.js'

var slider_img = document.querySelector('.slider-img');
var images = ['EA (1).jpg','EA (2).jpg','EA (3).jpg','EA (4).jpg','EA (5).jpg','EA (6).jpg','EA (7).jpg','EA (8).jpg','EA (9).jpg','EA (10).jpg','EA (11).jpg','EA (12).jpg','EA (13).jpg','EA (14).jpg','EA (15).jpg','EA (16).jpg','EA (17).jpg','EA (18).jpg','EA (19).jpg','EA (20).jpg','EA (21).jpg','EA (22).jpg','EA (23).jpg','EA (24).jpg','EA (25).jpg','EA (26).jpg','EA (27).jpg','EA (28).jpg','EA (29).jpg','EA (30).jpg','EA (31).jpg','EA (32).jpg','EA (33).jpg','EA (34).jpg','EA (35).jpg','EA (36).jpg','EA (37).jpg','EA (38).jpg','EA (39).jpg','EA (40).jpg','EA (41).jpg','EA (42).jpg','EA (43).jpg','EA (44).jpg','EA (45).jpg','EA (46).jpg','EA (47).jpg','EA (48).jpg','EA (49).jpg','EA (50).jpg','EA (51).jpg','EA (52).jpg','EA (53).jpg','EA (54).jpg','EA (55).jpg','EA (56).jpg','EA (57).jpg','EA (58).jpg','EA (59).jpg','EA (60).jpg','EA (61).jpg','EA (62).jpg','EA (63).jpg','EA (64).jpg','EA (65).jpg','EA (66).jpg','EA (67).jpg','EA (68).jpg','EA (69).jpg','EA (70).jpg','EA (71).jpg','EA (72).jpg','EA (73).jpg','EA (74).jpg','EA (75).jpg','EA (76).jpg','EA (77).jpg','EA (78).jpg','EA (79).jpg','EA (80).jpg','EA (81).jpg','EA (82).jpg','EA (83).jpg','EA (84).jpg','EA (85).jpg','EA (86).jpg','EA (87).jpg','EA (88).jpg','EA (89).jpg','EA (90).jpg','EA (91).jpg','EA (92).jpg','EA (93).jpg','EA (94).jpg','EA (95).jpg','EA (96).jpg','EA (97).jpg','EA (98).jpg','EA (99).jpg','EA (100).jpg','EA (101).jpg','EA (102).jpg','EA (103).jpg','EA (104).jpg','EA (105).jpg','EA (106).jpg','EA (107).jpg','EA (108).jpg','EA (109).jpg','EA (110).jpg','EA (111).jpg','EA (112).jpg','EA (113).jpg','EA (114).jpg','EA (115).jpg','EA (116).jpg','EA (117).jpg','EA (118).jpg','EA (119).jpg','EA (120).jpg','EA (121).jpg','EA (122).jpg','EA (123).jpg','EA (124).jpg','EA (125).jpg','EA (126).jpg','EA (127).jpg','EA (128).jpg','EA (129).jpg','EA (130).jpg','EA (131).jpg','EA (132).jpg','EA (133).jpg','EA (134).jpg','EA (135).jpg','EA (136).jpg','EA (137).jpg','EA (138).jpg','EA (139).jpg','EA (140).jpg','EA (141).jpg','EA (142).jpg'];
var i = 0;

function prev(){
	if(i <= 0) i = images.length;	
	i--;
	return setImg();			 
}

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return setImg();			 
}
function myImages1(){
i = -1;
	i++;
return setImg();
 }
function myImages2(){
i = 1;
	i++;
return setImg();
 }
function myImages3(){
i = 3;
	i++;
return setImg();
 }
function myImages4(){
i = 5;
	i++;
return setImg();
 }
function myImages5(){
i = 7;
	i++;
return setImg();
 }
function myImages6(){
i = 9;
	i++;
return setImg();
 }
function myImages7(){
i = 11;
	i++;
return setImg();
 }
function myImages8(){
i = 13;
	i++;
return setImg();
 }
function myImages9(){
i = 15;
	i++;
return setImg();
 }
function myImages10(){
i = 17;
	i++;
return setImg();
 }
function myImages11(){
i = 19;
	i++;
return setImg();
 }
function myImages12(){
i = 21;
	i++;
return setImg();
 }
function myImages13(){
i = 23;
	i++;
return setImg();
 }
function myImages14(){
i = 25;
	i++;
return setImg();
 }
function myImages15(){
i = 27;
	i++;
return setImg();
 }
function myImages16(){
i = 29;
	i++;
return setImg();
 }
function myImages17(){
i = 31;
	i++;
return setImg();
 }
function myImages18(){
i = 33;
	i++;
return setImg();
 }
function myImages19(){
i = 35;
	i++;
return setImg();
 }
function myImages20(){
i = 37;
	i++;
return setImg();
 }
function myImages21(){
i = 39;
	i++;
return setImg();
 }
function myImages22(){
i = 41;
	i++;
return setImg();
 }
function myImages23(){
i = 43;
	i++;
return setImg();
 }
function myImages24(){
i = 45;
	i++;
return setImg();
 }
function myImages25(){
i = 47;
	i++;
return setImg();
 }
function myImages26(){
i = 49;
	i++;
return setImg();
 }
function myImages27(){
i = 51;
	i++;
return setImg();
 }
function myImages28(){
i = 53;
	i++;
return setImg();
 }
function myImages29(){
i = 55;
	i++;
return setImg();
 }
function myImages30(){
i = 57;
	i++;
return setImg();
 }
function myImages31(){
i = 59;
	i++;
return setImg();
 }
function myImages32(){
i = 61;
	i++;
return setImg();
 }
function myImages33(){
i = 63;
	i++;
return setImg();
 }
function myImages34(){
i = 65;
	i++;
return setImg();
 }
function myImages35(){
i = 67;
	i++;
return setImg();
 }
function myImages36(){
i = 69;
	i++;
return setImg();
 }
function myImages37(){
i = 71;
	i++;
return setImg();
 }
function myImages38(){
i = 73;
	i++;
return setImg();
 }
function myImages39(){
i = 75;
	i++;
return setImg();
 }
function myImages40(){
i = 77;
	i++;
return setImg();
 }
function myImages41(){
i = 79;
	i++;
return setImg();
 }
function myImages42(){
i = 81;
	i++;
return setImg();
 }
function myImages43(){
i = 83;
	i++;
return setImg();
 }
function myImages44(){
i = 85;
	i++;
return setImg();
 }
function myImages45(){
i = 87;
	i++;
return setImg();
 }
function myImages46(){
i = 89;
	i++;
return setImg();
 }
function myImages47(){
i = 91;
	i++;
return setImg();
 }
function myImages48(){
i = 93;
	i++;
return setImg();
 }
function myImages49(){
i = 95;
	i++;
return setImg();
 }
function myImages50(){
i = 97;
	i++;
return setImg();
 }
function myImages51(){
i = 99;
	i++;
return setImg();
 }
function myImages52(){
i = 101;
	i++;
return setImg();
 }
function myImages53(){
i = 103;
	i++;
return setImg();
 }
function myImages54(){
i = 105;
	i++;
return setImg();
 }
function myImages55(){
i = 107;
	i++;
return setImg();
 }
function myImages56(){
i = 109;
	i++;
return setImg();
 }
function myImages57(){
i = 111;
	i++;
return setImg();
 }
function myImages58(){
i = 113;
	i++;
return setImg();
 }
function myImages59(){
i = 115;
	i++;
return setImg();
 }
function myImages60(){
i = 117;
	i++;
return setImg();
 }
function myImages61(){
i = 119;
	i++;
return setImg();
 }
function myImages62(){
i = 121;
	i++;
return setImg();
 }
function myImages63(){
i = 123;
	i++;
return setImg();
 }
function myImages64(){
i = 125;
	i++;
return setImg();
 }
function myImages65(){
i = 127;
	i++;
return setImg();
 }
function myImages66(){
i = 129;
	i++;
return setImg();
 }
function myImages67(){
i = 131;
	i++;
return setImg();
 }
function myImages68(){
i = 133;
	i++;
return setImg();
 }
function myImages69(){
i = 135;
	i++;
return setImg();
 }
function myImages70(){
i = 137;
	i++;
return setImg();
 }
function myImages71(){
i = 139;
	i++;
return setImg();
 }
function myImages72(){
i = 141;
	i++;
return setImg();
 }
function myImages73(){
i = 143;
	i++;
return setImg();
 }
function myImages74(){
i = 145;
	i++;
return setImg();
 }
function myImages75(){
i = 147;
	i++;
return setImg();
 }
function myImages76(){
i = 149;
	i++;
return setImg();
 }
function myImages77(){
i = 151;
	i++;
return setImg();
 }
function myImages78(){
i = 153;
	i++;
return setImg();
 }
function myImages79(){
i = 155;
	i++;
return setImg();
 }
function myImages80(){
i = 157;
	i++;
return setImg();
 }
function myImages81(){
i = 159;
	i++;
return setImg();
 }
function myImages82(){
i = 161;
	i++;
return setImg();
 }
function myImages83(){
i = 163;
	i++;
return setImg();
 }
function myImages84(){
i = 165;
	i++;
return setImg();
 }
function myImages85(){
i = 167;
	i++;
return setImg();
 }
function myImages86(){
i = 169;
	i++;
return setImg();
 }
function myImages87(){
i = 171;
	i++;
return setImg();
 }
function myImages88(){
i = 173;
	i++;
return setImg();
 }
function myImages89(){
i = 175;
	i++;
return setImg();
 }
function myImages90(){
i = 177;
	i++;
return setImg();
 }
function myImages91(){
i = 179;
	i++;
return setImg();
 }
function myImages92(){
i = 181;
	i++;
return setImg();
 }
function myImages93(){
i = 183;
	i++;
return setImg();
 }
function myImages94(){
i = 185;
	i++;
return setImg();
 }
function myImages95(){
i = 187;
	i++;
return setImg();
 }
function myImages96(){
i = 189;
	i++;
return setImg();
 }
function myImages97(){
i = 191;
	i++;
return setImg();
 }
function myImages98(){
i = 193;
	i++;
return setImg();
 }
function myImages99(){
i = 195;
	i++;
return setImg();
 }
function myImages100(){
i = 197;
	i++;
return setImg();
 }
function myImages101(){
i = 199;
	i++;
return setImg();
 }
function myImages102(){
i = 201;
	i++;
return setImg();
 }
function myImages103(){
i = 203;
	i++;
return setImg();
 }
function myImages104(){
i = 205;
	i++;
return setImg();
 }
function myImages105(){
i = 207;
	i++;
return setImg();
 }
function myImages106(){
i = 209;
	i++;
return setImg();
 }
function myImages107(){
i = 211;
	i++;
return setImg();
 }
function myImages108(){
i = 213;
	i++;
return setImg();
 }
function myImages109(){
i = 215;
	i++;
return setImg();
 }
function myImages110(){
i = 217;
	i++;
return setImg();
 }
function myImages111(){
i = 219;
	i++;
return setImg();
 }
function myImages112(){
i = 221;
	i++;
return setImg();
 }
function myImages113(){
i = 223;
	i++;
return setImg();
 }
function myImages114(){
i = 225;
	i++;
return setImg();
 }
function myImages115(){
i = 227;
	i++;
return setImg();
 }
function myImages116(){
i = 229;
	i++;
return setImg();
 }
function myImages117(){
i = 231;
	i++;
return setImg();
 }
function myImages118(){
i = 233;
	i++;
return setImg();
 }
function myImages119(){
i = 235;
	i++;
return setImg();
 }
function myImages120(){
i = 237;
	i++;
return setImg();
 }
function myImages121(){
i = 239;
	i++;
return setImg();
 }
function myImages122(){
i = 241;
	i++;
return setImg();
 }
function myImages123(){
i = 243;
	i++;
return setImg();
 }
function myImages124(){
i = 245;
	i++;
return setImg();
 }
function myImages125(){
i = 247;
	i++;
return setImg();
 }
function myImages126(){
i = 249;
	i++;
return setImg();
 }
function myImages127(){
i = 251;
	i++;
return setImg();
 }
function myImages128(){
i = 253;
	i++;
return setImg();
 }
function myImages129(){
i = 255;
	i++;
return setImg();
 }
function myImages130(){
i = 257;
	i++;
return setImg();
 }
function myImages131(){
i = 259;
	i++;
return setImg();
 }
function myImages132(){
i = 261;
	i++;
return setImg();
 }
function myImages133(){
i = 263;
	i++;
return setImg();
 }
function myImages134(){
i = 265;
	i++;
return setImg();
 }
function myImages135(){
i = 267;
	i++;
return setImg();
 }
function myImages136(){
i = 269;
	i++;
return setImg();
 }
function myImages137(){
i = 271;
	i++;
return setImg();
 }
function myImages138(){
i = 273;
	i++;
return setImg();
 }
function myImages139(){
i = 275;
	i++;
return setImg();
 }
function myImages140(){
i = 277;
	i++;
return setImg();
 }
function myImages141(){
i = 279;
	i++;
return setImg();
 }
function myImages142(){
i = 281;
	i++;
return setImg();
 }
function myImages143(){
i = 283;
	i++;
return setImg();
 }
function myImages144(){
i = 285;
	i++;
return setImg();
 }
function myImages145(){
i = 287;
	i++;
return setImg();
 }
function myImages146(){
i = 289;
	i++;
return setImg();
 }
function myImages147(){
i = 291;
	i++;
return setImg();
 }
function myImages148(){
i = 293;
	i++;
return setImg();
 }
function myImages149(){
i = 295;
	i++;
return setImg();
 }
function myImages150(){
i = 297;
	i++;
return setImg();
 }
function myImages151(){
i = 299;
	i++;
return setImg();
 }
function myImages152(){
i = 301;
	i++;
return setImg();
 }
function myImages153(){
i = 303;
	i++;
return setImg();
 }
function myImages154(){
i = 305;
	i++;
return setImg();
 }
function myImages155(){
i = 307;
	i++;
return setImg();
 }
function myImages156(){
i = 309;
	i++;
return setImg();
 }
function myImages157(){
i = 311;
	i++;
return setImg();
 }
function myImages158(){
i = 313;
	i++;
return setImg();
 }
function myImages159(){
i = 315;
	i++;
return setImg();
 }
function myImages160(){
i = 317;
	i++;
return setImg();
 }
function myImages161(){
i = 319;
	i++;
return setImg();
 }
function myImages162(){
i = 321;
	i++;
return setImg();
 }
function myImages163(){
i = 323;
	i++;
return setImg();
 }
function myImages164(){
i = 325;
	i++;
return setImg();
 }
function myImages165(){
i = 327;
	i++;
return setImg();
 }
function myImages166(){
i = 329;
	i++;
return setImg();
 }
function myImages167(){
i = 331;
	i++;
return setImg();
 }
function myImages168(){
i = 333;
	i++;
return setImg();
 }
function myImages169(){
i = 335;
	i++;
return setImg();
 }
function myImages170(){
i = 337;
	i++;
return setImg();
 }
function myImages171(){
i = 339;
	i++;
return setImg();
 }
function myImages172(){
i = 341;
	i++;
return setImg();
 }
function myImages173(){
i = 343;
	i++;
return setImg();
 }
function myImages174(){
i = 345;
	i++;
return setImg();
 }
function myImages175(){
i = 347;
	i++;
return setImg();
 }
function myImages176(){
i = 349;
	i++;
return setImg();
 }
function myImages177(){
i = 351;
	i++;
return setImg();
 }
function myImages178(){
i = 353;
	i++;
return setImg();
 }
function myImages179(){
i = 355;
	i++;
return setImg();
 }
function myImages180(){
i = 357;
	i++;
return setImg();
 }
function myImages181(){
i = 359;
	i++;
return setImg();
 }
function myImages182(){
i = 361;
	i++;
return setImg();
 }
function myImages183(){
i = 363;
	i++;
return setImg();
 }
function myImages184(){
i = 365;
	i++;
return setImg();
 }
function myImages185(){
i = 367;
	i++;
return setImg();
 }
function myImages186(){
i = 369;
	i++;
return setImg();
 }
function myImages187(){
i = 371;
	i++;
return setImg();
 }
function myImages188(){
i = 373;
	i++;
return setImg();
 }
function myImages189(){
i = 375;
	i++;
return setImg();
 }
function myImages190(){
i = 377;
	i++;
return setImg();
 }
function myImages191(){
i = 379;
	i++;
return setImg();
 }
function myImages192(){
i = 381;
	i++;
return setImg();
 }
function myImages193(){
i = 383;
	i++;
return setImg();
 }
function myImages194(){
i = 385;
	i++;
return setImg();
 }
function myImages195(){
i = 387;
	i++;
return setImg();
 }
function myImages196(){
i = 389;
	i++;
return setImg();
 }
function myImages197(){
i = 391;
	i++;
return setImg();
 }
function myImages198(){
i = 393;
	i++;
return setImg();
 }
function myImages199(){
i = 395;
	i++;
return setImg();
 }
function myImages200(){
i = 397;
	i++;
return setImg();
 }
function myImages201(){
i = 399;
	i++;
return setImg();
 }
function myImages202(){
i = 401;
	i++;
return setImg();
 }
function myImages203(){
i = 403;
	i++;
return setImg();
 }
function myImages204(){
i = 405;
	i++;
return setImg();
 }
function myImages205(){
i = 407;
	i++;
return setImg();
 }
function myImages206(){
i = 409;
	i++;
return setImg();
 }
function myImages207(){
i = 411;
	i++;
return setImg();
 }
function myImages208(){
i = 413;
	i++;
return setImg();
 }
function myImages209(){
i = 415;
	i++;
return setImg();
 }
function myImages210(){
i = 417;
	i++;
return setImg();
 }
function myImages211(){
i = 419;
	i++;
return setImg();
 }
function myImages212(){
i = 421;
	i++;
return setImg();
 }
function myImages213(){
i = 423;
	i++;
return setImg();
 }
function myImages214(){
i = 425;
	i++;
return setImg();
 }
function myImages215(){
i = 427;
	i++;
return setImg();
 }
function myImages216(){
i = 429;
	i++;
return setImg();
 }
function myImages217(){
i = 431;
	i++;
return setImg();
 }
function myImages218(){
i = 433;
	i++;
return setImg();
 }
function myImages219(){
i = 435;
	i++;
return setImg();
 }
function myImages220(){
i = 437;
	i++;
return setImg();
 }
function myImages221(){
i = 439;
	i++;
return setImg();
 }
function myImages222(){
i = 441;
	i++;
return setImg();
 }
function myImages223(){
i = 443;
	i++;
return setImg();
 }
function myImages224(){
i = 445;
	i++;
return setImg();
 }
function myImages225(){
i = 447;
	i++;
return setImg();
 }
function myImages226(){
i = 449;
	i++;
return setImg();
 }
function myImages227(){
i = 451;
	i++;
return setImg();
 }
function myImages228(){
i = 453;
	i++;
return setImg();
 }
function myImages229(){
i = 455;
	i++;
return setImg();
 }
function myImages230(){
i = 457;
	i++;
return setImg();
 }
function myImages231(){
i = 459;
	i++;
return setImg();
 }
function myImages232(){
i = 461;
	i++;
return setImg();
 }
function myImages233(){
i = 463;
	i++;
return setImg();
 }
function myImages234(){
i = 465;
	i++;
return setImg();
 }
function myImages235(){
i = 467;
	i++;
return setImg();
 }
function myImages236(){
i = 469;
	i++;
return setImg();
 }
function myImages237(){
i = 471;
	i++;
return setImg();
 }
function myImages238(){
i = 473;
	i++;
return setImg();
 }
function myImages239(){
i = 475;
	i++;
return setImg();
 }
function myImages240(){
i = 477;
	i++;
return setImg();
 }
function myImages241(){
i = 479;
	i++;
return setImg();
 }
function myImages242(){
i = 481;
	i++;
return setImg();
 }
function myImages243(){
i = 483;
	i++;
return setImg();
 }
function myImages244(){
i = 485;
	i++;
return setImg();
 }
function myImages245(){
i = 487;
	i++;
return setImg();
 }
function myImages246(){
i = 489;
	i++;
return setImg();
 }
function myImages247(){
i = 491;
	i++;
return setImg();
 }
function myImages248(){
i = 493;
	i++;
return setImg();
 }
function myImages249(){
i = 495;
	i++;
return setImg();
 }
function myImages250(){
i = 497;
	i++;
return setImg();
 }
function myImages251(){
i = 499;
	i++;
return setImg();
 }
function myImages252(){
i = 501;
	i++;
return setImg();
 }
function myImages253(){
i = 503;
	i++;
return setImg();
 }
function myImages254(){
i = 505;
	i++;
return setImg();
 }
function myImages255(){
i = 507;
	i++;
return setImg();
 }
function myImages256(){
i = 509;
	i++;
return setImg();
 }
function myImages257(){
i = 511;
	i++;
return setImg();
 }
function myImages258(){
i = 513;
	i++;
return setImg();
 }
function myImages259(){
i = 515;
	i++;
return setImg();
 }
function myImages260(){
i = 517;
	i++;
return setImg();
 }
function myImages261(){
i = 519;
	i++;
return setImg();
 }
function myImages262(){
i = 521;
	i++;
return setImg();
 }
function myImages263(){
i = 523;
	i++;
return setImg();
 }
function myImages264(){
i = 525;
	i++;
return setImg();
 }
function myImages265(){
i = 527;
	i++;
return setImg();
 }
function myImages266(){
i = 529;
	i++;
return setImg();
 }
function myImages267(){
i = 531;
	i++;
return setImg();
 }
function myImages268(){
i = 533;
	i++;
return setImg();
 }
function myImages269(){
i = 535;
	i++;
return setImg();
 }
function myImages270(){
i = 537;
	i++;
return setImg();
 }
function myImages271(){
i = 539;
	i++;
return setImg();
 }
function myImages272(){
i = 541;
	i++;
return setImg();
 }
function myImages273(){
i = 543;
	i++;
return setImg();
 }
function myImages274(){
i = 545;
	i++;
return setImg();
 }
function myImages275(){
i = 547;
	i++;
return setImg();
 }
function myImages276(){
i = 549;
	i++;
return setImg();
 }
function myImages277(){
i = 551;
	i++;
return setImg();
 }
function myImages278(){
i = 553;
	i++;
return setImg();
 }
function myImages279(){
i = 555;
	i++;
return setImg();
 }
function myImages280(){
i = 557;
	i++;
return setImg();
 }
function myImages281(){
i = 559;
	i++;
return setImg();
 }
function myImages282(){
i = 561;
	i++;
return setImg();
 }
function myImages283(){
i = 563;
	i++;
return setImg();
 }
function myImages284(){
i = 565;
	i++;
return setImg();
 }
function myImages285(){
i = 567;
	i++;
return setImg();
 }
function myImages286(){
i = 569;
	i++;
return setImg();
 }
function myImages287(){
i = 571;
	i++;
return setImg();
 }
function myImages288(){
i = 573;
	i++;
return setImg();
 }
function myImages289(){
i = 575;
	i++;
return setImg();
 }
function myImages290(){
i = 577;
	i++;
return setImg();
 }
function myImages291(){
i = 579;
	i++;
return setImg();
 }
function myImages292(){
i = 581;
	i++;
return setImg();
 }
function myImages293(){
i = 583;
	i++;
return setImg();
 }
function myImages294(){
i = 585;
	i++;
return setImg();
 }
function myImages295(){
i = 587;
	i++;
return setImg();
 }
function myImages296(){
i = 589;
	i++;
return setImg();
 }
function myImages297(){
i = 591;
	i++;
return setImg();
 }
function myImages298(){
i = 593;
	i++;
return setImg();
 }
function myImages299(){
i = 595;
	i++;
return setImg();
 }
function myImages300(){
i = 597;
	i++;
return setImg();
 }
function myImages301(){
i = 49;
	i++;
return setImg();
 }
function myImages302(){
i = 49;
	i++;
return setImg();
 }
function myImages303(){
i = 49;
	i++;
return setImg();
 }
function myImages304(){
i = 49;
	i++;
return setImg();
 }
function myImages305(){
i = 49;
	i++;
return setImg();
 }
function myImages306(){
i = 49;
	i++;
return setImg();
 }
function myImages307(){
i = 49;
	i++;
return setImg();
 }
function myImages308(){
i = 49;
	i++;
return setImg();
 }
function myImages309(){
i = 49;
	i++;
return setImg();
 }
function myImages310(){
i = 49;
	i++;
return setImg();
 }
function myImages311(){
i = 49;
	i++;
return setImg();
 }
function myImages312(){
i = 49;
	i++;
return setImg();
 }
function myImages313(){
i = 49;
	i++;
return setImg();
 }
function myImages314(){
i = 49;
	i++;
return setImg();
 }
function myImages315(){
i = 49;
	i++;
return setImg();
 }
function myImages316(){
i = 49;
	i++;
return setImg();
 }
function myImages317(){
i = 49;
	i++;
return setImg();
 }
function myImages318(){
i = 49;
	i++;
return setImg();
 }
function myImages319(){
i = 49;
	i++;
return setImg();
 }
function myImages320(){
i = 49;
	i++;
return setImg();
 }
function myImages321(){
i = 49;
	i++;
return setImg();
 }
function myImages322(){
i = 49;
	i++;
return setImg();
 }
function myImages323(){
i = 49;
	i++;
return setImg();
 }
function myImages324(){
i = 49;
	i++;
return setImg();
 }
function myImages325(){
i = 49;
	i++;
return setImg();
 }
function myImages326(){
i = 49;
	i++;
return setImg();
 }
function myImages327(){
i = 49;
	i++;
return setImg();
 }
function myImages328(){
i = 49;
	i++;
return setImg();
 }
function myImages329(){
i = 49;
	i++;
return setImg();
 }
function myImages330(){
i = 49;
	i++;
return setImg();
 }
function myImages331(){
i = 49;
	i++;
return setImg();
 }
function myImages332(){
i = 49;
	i++;
return setImg();
 }
function myImages333(){
i = 49;
	i++;
return setImg();
 }
function myImages334(){
i = 49;
	i++;
return setImg();
 }
function myImages335(){
i = 49;
	i++;
return setImg();
 }
function myImages336(){
i = 49;
	i++;
return setImg();
 }
function myImages337(){
i = 49;
	i++;
return setImg();
 }
function myImages338(){
i = 49;
	i++;
return setImg();
 }
function myImages339(){
i = 49;
	i++;
return setImg();
 }
function myImages340(){
i = 49;
	i++;
return setImg();
 }
function myImages341(){
i = 49;
	i++;
return setImg();
 }
function myImages342(){
i = 49;
	i++;
return setImg();
 }
function myImages343(){
i = 49;
	i++;
return setImg();
 }
function myImages344(){
i = 49;
	i++;
return setImg();
 }
function myImages345(){
i = 49;
	i++;
return setImg();
 }
function myImages346(){
i = 49;
	i++;
return setImg();
 }
function myImages347(){
i = 49;
	i++;
return setImg();
 }
function myImages348(){
i = 49;
	i++;
return setImg();
 }
function myImages349(){
i = 49;
	i++;
return setImg();
 }
function myImages350(){
i = 49;
	i++;
return setImg();
 }
function myImages351(){
i = 49;
	i++;
return setImg();
 }
function myImages352(){
i = 49;
	i++;
return setImg();
 }
function myImages353(){
i = 49;
	i++;
return setImg();
 }
function myImages354(){
i = 49;
	i++;
return setImg();
 }
function myImages355(){
i = 49;
	i++;
return setImg();
 }
function myImages356(){
i = 49;
	i++;
return setImg();
 }
function myImages357(){
i = 49;
	i++;
return setImg();
 }
function myImages358(){
i = 49;
	i++;
return setImg();
 }
function myImages359(){
i = 49;
	i++;
return setImg();
 }
function myImages360(){
i = 49;
	i++;
return setImg();
 }
function myImages361(){
i = 49;
	i++;
return setImg();
 }
function myImages362(){
i = 49;
	i++;
return setImg();
 }
function myImages363(){
i = 49;
	i++;
return setImg();
 }
function myImages364(){
i = 49;
	i++;
return setImg();
 }
function myImages365(){
i = 49;
	i++;
return setImg();
 }
function myImages366(){
i = 49;
	i++;
return setImg();
 }
function myImages367(){
i = 49;
	i++;
return setImg();
 }
function myImages368(){
i = 49;
	i++;
return setImg();
 }
function myImages369(){
i = 49;
	i++;
return setImg();
 }
function myImages370(){
i = 49;
	i++;
return setImg();
 }
function myImages371(){
i = 49;
	i++;
return setImg();
 }
function myImages372(){
i = 49;
	i++;
return setImg();
 }
function myImages373(){
i = 49;
	i++;
return setImg();
 }
function myImages374(){
i = 49;
	i++;
return setImg();
 }
function myImages375(){
i = 49;
	i++;
return setImg();
 }
function myImages376(){
i = 49;
	i++;
return setImg();
 }
function myImages377(){
i = 49;
	i++;
return setImg();
 }
function myImages378(){
i = 49;
	i++;
return setImg();
 }
function myImages379(){
i = 49;
	i++;
return setImg();
 }
function myImages380(){
i = 49;
	i++;
return setImg();
 }
function myImages381(){
i = 49;
	i++;
return setImg();
 }
function myImages382(){
i = 49;
	i++;
return setImg();
 }
function myImages383(){
i = 49;
	i++;
return setImg();
 }
function myImages384(){
i = 49;
	i++;
return setImg();
 }
function myImages385(){
i = 49;
	i++;
return setImg();
 }
function myImages386(){
i = 49;
	i++;
return setImg();
 }
function myImages387(){
i = 49;
	i++;
return setImg();
 }
function myImages388(){
i = 49;
	i++;
return setImg();
 }
function myImages389(){
i = 49;
	i++;
return setImg();
 }
function myImages390(){
i = 49;
	i++;
return setImg();
 }
function myImages391(){
i = 49;
	i++;
return setImg();
 }
function myImages392(){
i = 49;
	i++;
return setImg();
 }
function myImages393(){
i = 49;
	i++;
return setImg();
 }
function myImages394(){
i = 49;
	i++;
return setImg();
 }
function myImages395(){
i = 49;
	i++;
return setImg();
 }
function myImages396(){
i = 49;
	i++;
return setImg();
 }
function myImages397(){
i = 49;
	i++;
return setImg();
 }
function myImages398(){
i = 49;
	i++;
return setImg();
 }
function myImages399(){
i = 49;
	i++;
return setImg();
 }
function myImages400(){
i = 49;
	i++;
return setImg();
 }
function myImages401(){
i = 49;
	i++;
return setImg();
 }
function myImages402(){
i = 49;
	i++;
return setImg();
 }
function myImages403(){
i = 49;
	i++;
return setImg();
 }
function myImages404(){
i = 49;
	i++;
return setImg();
 }
function myImages405(){
i = 49;
	i++;
return setImg();
 }
function myImages406(){
i = 49;
	i++;
return setImg();
 }
function myImages407(){
i = 49;
	i++;
return setImg();
 }
function myImages408(){
i = 49;
	i++;
return setImg();
 }
function myImages409(){
i = 49;
	i++;
return setImg();
 }
function myImages410(){
i = 49;
	i++;
return setImg();
 }
function myImages411(){
i = 49;
	i++;
return setImg();
 }
function myImages412(){
i = 49;
	i++;
return setImg();
 }
function myImages413(){
i = 49;
	i++;
return setImg();
 }
function myImages414(){
i = 49;
	i++;
return setImg();
 }
function myImages415(){
i = 49;
	i++;
return setImg();
 }
function myImages416(){
i = 49;
	i++;
return setImg();
 }
function myImages417(){
i = 49;
	i++;
return setImg();
 }
function myImages418(){
i = 49;
	i++;
return setImg();
 }
function myImages419(){
i = 49;
	i++;
return setImg();
 }
function myImages420(){
i = 49;
	i++;
return setImg();
 }
function myImages421(){
i = 49;
	i++;
return setImg();
 }
function myImages422(){
i = 49;
	i++;
return setImg();
 }
function myImages423(){
i = 49;
	i++;
return setImg();
 }
function myImages424(){
i = 49;
	i++;
return setImg();
 }
function myImages425(){
i = 49;
	i++;
return setImg();
 }
function myImages426(){
i = 49;
	i++;
return setImg();
 }
function myImages427(){
i = 49;
	i++;
return setImg();
 }
function myImages428(){
i = 49;
	i++;
return setImg();
 }
function myImages429(){
i = 49;
	i++;
return setImg();
 }
function myImages430(){
i = 49;
	i++;
return setImg();
 }
function myImages431(){
i = 49;
	i++;
return setImg();
 }
function myImages432(){
i = 49;
	i++;
return setImg();
 }
function myImages433(){
i = 49;
	i++;
return setImg();
 }
function myImages434(){
i = 49;
	i++;
return setImg();
 }
function myImages435(){
i = 49;
	i++;
return setImg();
 }
function myImages436(){
i = 49;
	i++;
return setImg();
 }
function myImages437(){
i = 49;
	i++;
return setImg();
 }
function myImages438(){
i = 49;
	i++;
return setImg();
 }
function myImages439(){
i = 49;
	i++;
return setImg();
 }
function myImages440(){
i = 49;
	i++;
return setImg();
 }
function myImages441(){
i = 49;
	i++;
return setImg();
 }
function myImages442(){
i = 49;
	i++;
return setImg();
 }
function myImages443(){
i = 49;
	i++;
return setImg();
 }
function myImages444(){
i = 49;
	i++;
return setImg();
 }
function myImages445(){
i = 49;
	i++;
return setImg();
 }
function myImages446(){
i = 49;
	i++;
return setImg();
 }
function myImages447(){
i = 49;
	i++;
return setImg();
 }
function myImages448(){
i = 49;
	i++;
return setImg();
 }
function myImages449(){
i = 49;
	i++;
return setImg();
 }
function myImages450(){
i = 49;
	i++;
return setImg();
 }
function myImages451(){
i = 49;
	i++;
return setImg();
 }
function myImages452(){
i = 49;
	i++;
return setImg();
 }
function myImages453(){
i = 49;
	i++;
return setImg();
 }
function myImages454(){
i = 49;
	i++;
return setImg();
 }
function myImages455(){
i = 49;
	i++;
return setImg();
 }
function myImages456(){
i = 49;
	i++;
return setImg();
 }
function myImages457(){
i = 49;
	i++;
return setImg();
 }
function myImages458(){
i = 49;
	i++;
return setImg();
 }
function myImages459(){
i = 49;
	i++;
return setImg();
 }
function myImages460(){
i = 49;
	i++;
return setImg();
 }
function myImages461(){
i = 49;
	i++;
return setImg();
 }
function myImages462(){
i = 49;
	i++;
return setImg();
 }
function myImages463(){
i = 49;
	i++;
return setImg();
 }
function myImages464(){
i = 49;
	i++;
return setImg();
 }
function myImages465(){
i = 49;
	i++;
return setImg();
 }
function myImages466(){
i = 49;
	i++;
return setImg();
 }
function myImages467(){
i = 49;
	i++;
return setImg();
 }
function myImages468(){
i = 49;
	i++;
return setImg();
 }
function myImages469(){
i = 49;
	i++;
return setImg();
 }
function myImages470(){
i = 49;
	i++;
return setImg();
 }
function myImages471(){
i = 49;
	i++;
return setImg();
 }
function myImages472(){
i = 49;
	i++;
return setImg();
 }
function myImages473(){
i = 49;
	i++;
return setImg();
 }
function myImages474(){
i = 49;
	i++;
return setImg();
 }
function myImages475(){
i = 49;
	i++;
return setImg();
 }
function myImages476(){
i = 49;
	i++;
return setImg();
 }
function myImages477(){
i = 49;
	i++;
return setImg();
 }
function myImages478(){
i = 49;
	i++;
return setImg();
 }
function myImages479(){
i = 49;
	i++;
return setImg();
 }
function myImages480(){
i = 49;
	i++;
return setImg();
 }
function myImages481(){
i = 49;
	i++;
return setImg();
 }
function myImages482(){
i = 49;
	i++;
return setImg();
 }
function myImages483(){
i = 49;
	i++;
return setImg();
 }
function myImages484(){
i = 49;
	i++;
return setImg();
 }
function myImages485(){
i = 49;
	i++;
return setImg();
 }
function myImages486(){
i = 49;
	i++;
return setImg();
 }
function myImages487(){
i = 49;
	i++;
return setImg();
 }
function myImages488(){
i = 49;
	i++;
return setImg();
 }
function myImages489(){
i = 49;
	i++;
return setImg();
 }
function myImages490(){
i = 49;
	i++;
return setImg();
 }
function myImages491(){
i = 49;
	i++;
return setImg();
 }
function myImages492(){
i = 49;
	i++;
return setImg();
 }
function myImages493(){
i = 49;
	i++;
return setImg();
 }
function myImages494(){
i = 49;
	i++;
return setImg();
 }
function myImages495(){
i = 49;
	i++;
return setImg();
 }
function myImages496(){
i = 49;
	i++;
return setImg();
 }
function myImages497(){
i = 49;
	i++;
return setImg();
 }
function myImages498(){
i = 49;
	i++;
return setImg();
 }
function myImages499(){
i = 49;
	i++;
return setImg();
 }
function myImages500(){
i = 49;
	i++;
return setImg();
 }
function myFunction1() {
  document.getElementById("myP").style.visibility = "hidden";
} 

function myFunction2() {
  document.getElementById("myP").style.visibility = "visible";
} 

function setImg(){
	return slider_img.setAttribute('src', "images/"+images[i]);
	
}
