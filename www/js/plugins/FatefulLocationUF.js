//=============================================================================
// FatefulLocationUF.js
//=============================================================================

/*:ja
 * @plugindesc ver1.11 場所移動時の自動演奏の制御等
 * @author まっつＵＰ
 *
 * @param bgmSwitch
 * @desc オンにしていると場所移動時設定したBGMを自動演奏しません。
 * @type switch
 * @default 10
 * 
 * @param bgsSwitch
 * @desc オンにしていると場所移動時設定したBGSを自動演奏しません。
 * @type switch
 * @default 11
 * 
 * @param ufinitVariable
 * @desc このIDの変数は場所移動時に0になります。
 * @type variable
 * @default 0
 * 
 * @help
 * 
 * RPGで笑顔を・・・
 * 
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 * 
 * FatefulLocationの簡易バージョンです。
 * 
 * bgmSwitchは任意のスイッチのIDを設定します。
 * このスイッチをオンにすると場所移動後のマップの自動演奏が設定されていても
 * そのBGMの自動演奏を行われません。
 * 
 * ufinitVariableは任意の変数のIDを設定します。
 * このIDの変数は場所移動時に0になります。
 * 
 * このプラグインを利用する場合は
 * readmeなどに「まっつＵＰ」の名を入れてください。
 * また、素材のみの販売はダメです。
 * 上記以外の規約等はございません。
 * もちろんツクールMVで使用する前提です。
 * 何か不具合ありましたら気軽にどうぞ。
 * 
 * ver1.11 プラグインパラメータの更新
 * 
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 * 
 */

(function() {
    
var parameters = PluginManager.parameters('FatefulLocationUF');
var APbgmSwitch = Number(parameters['bgmSwitch'] || 10);
var APbgsSwitch = Number(parameters['bgsSwitch'] || 11);
var APufinit = Number(parameters['ufinitVariable'] || 0);
    
Game_Map.prototype.autoplay = function() {
    if ($dataMap.autoplayBgm && !$gameSwitches.value(APbgmSwitch)) {
        AudioManager.playBgm($dataMap.bgm);
    }
    if ($dataMap.autoplayBgs && !$gameSwitches.value(APbgsSwitch)) {
        AudioManager.playBgs($dataMap.bgs);
    }
    if(APufinit > 0){
        $gameVariables.setValue(APufinit, 0);
    }
};
    
})();
