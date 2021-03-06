//获取时间戳及token
var timestamp = (new Date()).valueOf();
let token

let videoObj

//弹窗
function layer_show(clk_icon_classname) {
    $('.' + clk_icon_classname).on('click', function () {
        let this_id = $(this).attr('id')
        let that = this_id
        if ($('#' + this_id + '_ly').is(':hidden')) {
            $('#' + this_id + '_ly').show()
            if (clk_icon_classname == 'videoIcon') {
                //168层监控设备
                $.ajax({
                    url: "http://58.16.56.202:9000/smart-bldg/big/screen/monitor168EquipmentOperation",
                    headers: { 'Auth-Token': token },
                    success: function (resp) {
                        console.log(resp)
                        let source_m3u8
                        console.log(that)
                        if (that == 'video_f1_1') {
                            source_m3u8 = resp.data.c_1000051.url
                        } else if (that == 'video_f1_2') {
                            source_m3u8 = resp.data.c_1000061.url
                        } else if (that == 'video_f6_1') {
                            source_m3u8 = resp.data.c_1000096.url
                        } else if (that == 'video_f6_2') {
                            source_m3u8 = resp.data.c_1000097.url
                        } else if (that == 'video_f6_3') {
                            source_m3u8 = resp.data.c_1000095.url
                        } else if (that == 'video_f6_4') {
                            source_m3u8 = resp.data.c_1000094.url
                        } else if (that == 'video_f6_5') {
                            source_m3u8 = resp.data.c_1000093.url
                        } else if (that == 'video_f6_6') {
                            source_m3u8 = resp.data.c_1000092.url
                        } else if (that == 'video_f6_7') {
                            source_m3u8 = resp.data.c_1000086.url
                        } else if (that == 'video_f6_8') {
                            source_m3u8 = resp.data.c_1000087.url
                        } else if (that == 'video_f6_9') {
                            source_m3u8 = resp.data.c_1000089.url
                        } else if (that == 'video_f6_10') {
                            source_m3u8 = resp.data.c_1000088.url
                        } else if (that == 'video_f6_11') {
                            source_m3u8 = resp.data.c_1000091.url
                        } else if (that == 'video_f6_12') {
                            source_m3u8 = resp.data.c_1000090.url
                        } else if (that == 'video_f8_6') {
                            source_m3u8 = resp.data.c_1000098.url
                        } else if (that == 'video_f8_5') {
                            source_m3u8 = resp.data.c_1000099.url
                        } else if (that == 'video_f8_5') {
                            source_m3u8 = resp.data.c_1000099.url
                        } else if (that == 'video_f8_1') {
                            source_m3u8 = resp.data.c_1000100.url
                        } else if (that == 'video_f8_2') {
                            source_m3u8 = resp.data.c_1000101.url
                        } else if (that == 'video_f8_3') {
                            source_m3u8 = resp.data.c_1000103.url
                        } else if (that == 'video_f8_4') {
                            source_m3u8 = resp.data.c_1000102.url
                        }
                        var option = {};
                        var myPlayer = videojs(this_id + '_ly_video', option, function onPlayerReady() {
                            // var myPlayer = this;
                            myPlayer.src({ src: source_m3u8, type: "application/x-mpegURL" });
                            videojs.log("播放器已经准备好了!");
                            // this.play();
                        });
                        myPlayer.play()

                    }
                });


            } else if (clk_icon_classname == 'waterIcon') {
                //根据类型获取设备数据
                $.ajax({
                    url: "http://58.16.56.202:9000/smart-bldg/big/screen/listDeviceInfoByType",
                    headers: { 'Auth-Token': token },
                    data: { type: 8 },
                    success: function (resp) {
                        console.log(resp)
                        console.log($('#' + this_id + '_ly'))
                        $('#' + this_id + '_ly').html("状态：正常")
                    }
                });
            } else if (clk_icon_classname == 'smokeIcon') {
                //烟感数据
                $.ajax({
                    url: "http://58.16.56.202:9000/smart-bldg/big/screen/listDeviceInfoByType",
                    headers: { 'Auth-Token': token },
                    data: { type: 9 },
                    success: function (resp) {
                        console.log(resp)
                        let address, onlineStatusName, repairDesc
                        if (that == 'smoke_f3_2') {
                            address = resp.data.c_1305152385521356802.address
                            onlineStatusName = resp.data.c_1305152385521356802.onlineStatusName
                            repairDesc = resp.data.c_1305152385521356802.repairDesc
                        } else if (that == 'smoke_f3_3') {
                            address = resp.data.c_1305152385391333378.address
                            onlineStatusName = resp.data.c_1305152385391333378.onlineStatusName
                            repairDesc = resp.data.c_1305152385391333378.repairDesc
                        } else if (that == 'smoke_f3_4') {
                            address = resp.data.c_1305152371650793474.address
                            onlineStatusName = resp.data.c_1305152371650793474.onlineStatusName
                            repairDesc = resp.data.c_1305152371650793474.repairDesc
                        } else if (that == 'smoke_f3_6') {
                            address = resp.data.c_1305152385248727041.address
                            onlineStatusName = resp.data.c_1305152385248727041.onlineStatusName
                            repairDesc = resp.data.c_1305152385248727041.repairDesc
                        } else if (that == 'smoke_f3_7') {
                            address = resp.data.c_1305152385085149186.address
                            onlineStatusName = resp.data.c_1305152385085149186.onlineStatusName
                            repairDesc = resp.data.c_1305152385085149186.repairDesc
                        } else if (that == 'smoke_f3_8') {
                            address = resp.data.c_1305152384929959938.address
                            onlineStatusName = resp.data.c_1305152384929959938.onlineStatusName
                            repairDesc = resp.data.c_1305152384929959938.repairDesc
                        } else if (that == 'smoke_f3_9') {
                            address = resp.data.c_1305152384749604865.address
                            onlineStatusName = resp.data.c_1305152384749604865.onlineStatusName
                            repairDesc = resp.data.c_1305152384749604865.repairDesc
                        } else if (that == 'smoke_f3_10') {
                            address = resp.data.c_1305152384611192833.address
                            onlineStatusName = resp.data.c_1305152384611192833.onlineStatusName
                            repairDesc = resp.data.c_1305152384611192833.repairDesc
                        } else if (that == 'smoke_f3_11') {
                            address = resp.data.c_1305152384468586497.address
                            onlineStatusName = resp.data.c_1305152384468586497.onlineStatusName
                            repairDesc = resp.data.c_1305152384468586497.repairDesc
                        } else if (that == 'smoke_f3_12') {
                            address = resp.data.c_1305152384330174465.address
                            onlineStatusName = resp.data.c_1305152384330174465.onlineStatusName
                            repairDesc = resp.data.c_1305152384330174465.repairDesc
                        } else if (that == 'smoke_f3_13') {
                            address = resp.data.c_1305152384057544706.address
                            onlineStatusName = resp.data.c_1305152384057544706.onlineStatusName
                            repairDesc = resp.data.c_1305152384057544706.repairDesc
                        } else if (that == 'smoke_f3_16') {
                            address = resp.data.c_1305152383914938369.address
                            onlineStatusName = resp.data.c_1305152383914938369.onlineStatusName
                            repairDesc = resp.data.c_1305152383914938369.repairDesc
                        } else if (that == 'smoke_f3_17') {
                            address = resp.data.c_1305152383738777602.address
                            onlineStatusName = resp.data.c_1305152383738777602.onlineStatusName
                            repairDesc = resp.data.c_1305152383738777602.repairDesc
                        } else if (that == 'smoke_f3_18') {
                            address = resp.data.c_1305152383600365569.address
                            onlineStatusName = resp.data.c_1305152383600365569.onlineStatusName
                            repairDesc = resp.data.c_1305152383600365569.repairDesc
                        } else if (that == 'smoke_f3_19') {
                            address = resp.data.c_1305152383436787714.address
                            onlineStatusName = resp.data.c_1305152383436787714.onlineStatusName
                            repairDesc = resp.data.c_1305152383436787714.repairDesc
                        } else if (that == 'smoke_f3_20') {
                            address = resp.data.c_1305152383248044033.address
                            onlineStatusName = resp.data.c_1305152383248044033.onlineStatusName
                            repairDesc = resp.data.c_1305152383248044033.repairDesc
                        }
                        $('#' + this_id + '_ly').html(`<ul class="layer_status">
                        <li>设备： <span>` + address + `</span></li>
                        <li>情况： <span>` + onlineStatusName + `</span></li>
                        <li>状态： <span>` + repairDesc + `</span></li>
                      </ul>`)
                    }
                });
            } else if (clk_icon_classname == 'gateIcon') {
                if (that == 'gate1') {
                    $.ajax({
                        url: "http://58.16.56.202:9000/smart-bldg/big/screen/getGateDeviceLastData",
                        headers: { 'Auth-Token': token },
                        data: { devId: "1000016" },
                        success: function (resp) {
                            console.log(resp)
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                        <li>设备： <span>A栋一楼翼闸</span></li>
                        <li>最后进入： <span>` + resp.data.personName + `</span></li>
                        <li>部门： <span>` + resp.data.deptName + `</span></li>
                        <li>时间： <span>` + resp.data.swingTime + `</span></li>
                        <li><span><img src="` + resp.data.recordImage + `"></span></li>
                      </ul>`)
                        }
                    })
                } else if (that == 'gate2') {
                    $.ajax({
                        url: "http://58.16.56.202:9000/smart-bldg/big/screen/getGateDeviceLastData",
                        headers: { 'Auth-Token': token },
                        data: { devId: "1000028" },//"1000028"
                        success: function (resp) {
                            console.log(resp)
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                        <li>设备： <span>B栋一楼翼闸</span></li>
                        <li>最后进入： <span>` + resp.data.personName + `</span></li>
                        <li>部门： <span>` + resp.data.deptName + `</span></li>
                        <li>时间： <span>` + resp.data.swingTime + `</span></li>
                        <li><span><img src="` + resp.data.recordImage + `"></span></li>
                      </ul>`)
                        }
                    })
                }

            } else if (clk_icon_classname == 'AOCNIcon') {
                $.ajax({
                    url: "http://58.16.56.202:9000/smart-bldg/big/screen/listWeiyuDevice",
                    headers: { 'Auth-Token': token },
                    // data: { type: 4 },
                    success: function (resp) {
                        console.log(resp)
                        let dev_arr = []
                        if (that == 'aocn_f3_1') {
                            for (let i = 0; i < resp.data.AB3.length; i++) {
                                dev_arr.push(resp.data.AB3[i].devName)
                            }
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>类型： <span>` + "空开" + `</span></li>
                            <li>状态： <span>` + resp.data.AB3[0].repairDesc + `</span></li>
                            <li>设备： <span>` + dev_arr.join('-') + `</span></li>
                          </ul>`)
                        } else if (that == 'aocn_f8_2') {
                            for (let i = 0; i < resp.data.B806.length; i++) {
                                dev_arr.push(resp.data.B806[i].devName)
                            }
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>类型： <span>` + "空开" + `</span></li>
                            <li>状态： <span>` + resp.data.B806[0].repairDesc + `</span></li>
                            <li>设备： <span>` + dev_arr.join('-') + `</span></li>
                          </ul>`)
                        } else if (that == 'aocn_f8_3') {
                            for (let i = 0; i < resp.data.B804.length; i++) {
                                dev_arr.push(resp.data.B804[i].devName)
                            }
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>类型： <span>` + "空开" + `</span></li>
                            <li>状态： <span>` + resp.data.B804[0].repairDesc + `</span></li>
                            <li>设备： <span>` + dev_arr.join('-') + `</span></li>
                          </ul>`)
                        } else if (that == 'aocn_f8_4') {
                            for (let i = 0; i < resp.data.A808.length; i++) {
                                dev_arr.push(resp.data.A808[i].devName)
                            }
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>类型： <span>` + "空开" + `</span></li>
                            <li>状态： <span>` + resp.data.A808[0].repairDesc + `</span></li>
                            <li>设备： <span>` + dev_arr.join('-') + `</span></li>
                          </ul>`)
                        } else if (that == 'aocn_f9_1') {
                            for (let i = 0; i < resp.data.A903.length; i++) {
                                dev_arr.push(resp.data.A903[i].devName)
                            }
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>类型： <span>` + "正常" + `</span></li>
                            <li>状态： <span>` + resp.data.A903[0].repairDesc + `</span></li>
                            <li>设备： <span>` + dev_arr.join('-') + `</span></li>
                          </ul>`)
                        }
                    }
                })
            } else if (clk_icon_classname == 'meterIcon') {
                $.ajax({
                    url: "http://58.16.56.202:9000/smart-bldg/big/screen/getTopscommHydropower",
                    headers: { 'Auth-Token': token },
                    // data: { type: 4 },
                    success: function (resp) {
                        console.log(resp)
                        if (that == 'meter_f2_2') {
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>状态： <span>` + "正常" + `</span></li>
                            <li>读数： <span>` + resp.data[0].data + `kwh</span></li>
                            <li>设备名称： <span>` + "电表" + `</span></li>
                          </ul>`)
                        } else if (that == 'meter_f2_1') {
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>状态： <span>` + "正常" + `</span></li>
                            <li>读数： <span>` + resp.data[1].data + `m³</span></li>
                            <li>设备名称： <span>` + "水表" + `</span></li>
                          </ul>`)
                        }
                    }
                })
            } else if (clk_icon_classname == 'trashCanIcon') {
                $.ajax({
                    url: "http://58.16.56.202:9000/smart-bldg/big/screen/listDeviceInfoByType",
                    headers: { 'Auth-Token': token },
                    data: { type: 12 },
                    success: function (resp) {
                        console.log(resp)
                        if (that == 'trashCan_f0_1') {
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>设备名称： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe56bc0003.address + `</span></li>
                            <li>状态： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe56bc0003.onlineStatusName + `</span></li>
                            <li>情况： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe56bc0003.repairDesc + `</span></li>
                          </ul>`)
                        } else if (that == 'trashCan_f0_2') {
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>设备名称： <span>` + resp.data.c_4028e38174967eb60174967eb6910002.address + `</span></li>
                            <li>状态： <span>` + resp.data.c_4028e38174967eb60174967eb6910002.onlineStatusName + `</span></li>
                            <li>情况： <span>` + resp.data.c_4028e38174967eb60174967eb6910002.repairDesc + `</span></li>
                          </ul>`)
                        } else if (that == 'trashCan_f0_3') {
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>设备名称： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe569e0001.address + `</span></li>
                            <li>状态： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe569e0001.onlineStatusName + `</span></li>
                            <li>情况： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe569e0001.repairDesc + `</span></li>
                          </ul>`)
                        } else if (that == 'trashCan_f0_4') {
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>设备名称： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe56c50004.address + `</span></li>
                            <li>状态： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe56c50004.onlineStatusName + `</span></li>
                            <li>情况： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe56c50004.repairDesc + `</span></li>
                          </ul>`)
                        } else if (that == 'trashCan_f0_5') {
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>设备名称： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe56820000.address + `</span></li>
                            <li>状态： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe56820000.onlineStatusName + `</span></li>
                            <li>情况： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe56820000.repairDesc + `</span></li>
                          </ul>`)
                        }
                    }
                })
            } else if (clk_icon_classname == 'hole_coverIcon') {
                $.ajax({
                    url: "http://58.16.56.202:9000/smart-bldg/big/screen/listDeviceInfoByType",
                    headers: { 'Auth-Token': token },
                    data: { type: 11 },
                    success: function (resp) {
                        console.log(resp)
                        if (that == 'hole_cover_f0_1') {
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>设备名称： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe59e60018.address + `</span></li>
                            <li>状态： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe59e60018.onlineStatusName + `</span></li>
                            <li>情况： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe59e60018.repairDesc + `</span></li>
                          </ul>`)
                        } else if (that == 'hole_cover_f0_2') {
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>设备名称： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe59df0017.address + `</span></li>
                            <li>状态： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe59df0017.onlineStatusName + `</span></li>
                            <li>情况： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe59df0017.repairDesc + `</span></li>
                          </ul>`)
                        } else if (that == 'hole_cover_f0_3') {
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>设备名称： <span>` + resp.data.c_4028e38174967eb60174967ebc0e0016.address + `</span></li>
                            <li>状态： <span>` + resp.data.c_4028e38174967eb60174967ebc0e0016.onlineStatusName + `</span></li>
                            <li>情况： <span>` + resp.data.c_4028e38174967eb60174967ebc0e0016.repairDesc + `</span></li>
                          </ul>`)
                        } else if (that == 'hole_cover_f0_4') {
                            $('#' + this_id + '_ly').html(`<ul class="layer_status">
                            <li>设备名称： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe59cd0015.address + `</span></li>
                            <li>状态： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe59cd0015.onlineStatusName + `</span></li>
                            <li>情况： <span>` + resp.data.c_8a1e4b8b7499fe56017499fe59cd0015.repairDesc + `</span></li>
                          </ul>`)
                        }
                    }
                })
            }
        } else {
            $('#' + this_id + '_ly').hide()
        }
    })
}


$.post("http://58.16.56.202:9000/smart-bldg/big/screen/oauth/getToken", { appId: 101878570, appKey: 'FA04063DE2339340D4E36114FA5E8EEB', timeStamp: timestamp }, function (resp) {
    token = resp.data.token
    console.log(token)
    //首屏监控切换
    $.ajax({
        url: "http://58.16.56.202:9000/smart-bldg/big/screen/monitorEquipmentOperation",
        headers: { 'Auth-Token': token },
        success: function (resp) {
            console.log(resp.data)
            setTimeout(() => {
                let videoSrc = resp.data[18].url
                $('#equip_name').html(resp.data[18].name)
                let arr_name = []
                let arr_url = []
                // $.each(resp.data, function (i, value) {
                //     arr_name.push(value.name)
                //     arr_url.push(value.url)
                // })

                // sourceDom = `<source id="source" src='' type="application/x-mpegURL" />`
                // $('#welcomeVideo').append(sourceDom)

                // var myVideo = videojs('welcomeVideo', {
                //     bigPlayButton: true,
                //     textTrackDisplay: false,
                //     posterImage: false,
                //     errorDisplay: false,
                // })

                // myVideo.play()
                videoObj = videojs('welcomeVideo')
                var option = {};
                var myVideo = videojs('welcomeVideo', option, function onPlayerReady() {
                    // var myVideo = this;
                    myVideo.src({ src: videoSrc, type: "application/x-mpegURL" });
                    videojs.log("播放器已经准备好了!");
                    // this.play();
                });
                myVideo.play()

                // function changeVideo(videoSrc) {
                //     videoObj.src({ src: videoSrc, type: "application/x-mpegURL" });
                //     myVideo.play()
                // }
                // changeVideo(videoSrc)

                videoObj.on("loadedmetadata", function () {
                    console.log("正在读取配置信息")
                });


                //更改src
                // function changeVideo(vdoSrc) {
                //     if (/\.m3u8$/.test(vdoSrc)) { //判断视频源是否是m3u8的格式
                //         myVideo.src({
                //             src: vdoSrc,
                //             type: 'application/x-mpegURL' //在重新添加视频源的时候需要给新的type的值
                //         })
                //     } else {
                //         myVideo.src(vdoSrc)
                //     }

                //     myVideo.load();
                //     myVideo.play();
                // }
                // changeVideo(videoSrc)
                //定时换
                // let index = 1

                // setInterval(function () {
                //     if (i >= arr_url.length) {
                //         clearInterval()
                //         return
                //     }

                //     videoSrc = arr_url[index]
                //     $('#equip_name').html(arr_name[index])
                //     changeVideo(videoSrc);
                //     index++
                // }, 30000);

            }, 3000);
        }
    })

    function equip_load() {
        // 设备在线情况
        $.ajax({
            url: "http://58.16.56.202:9000/smart-bldg/big/screen/equipmentOperationStatus",
            headers: { 'Auth-Token': token },
            success: function (resp) {
                console.log(resp)
                setTimeout(() => {
                    $('#equip_num').html(resp.data.monitorStatus.totalNum)
                    $('#onlineNum').html(resp.data.monitorStatus.onlineNum)
                    $('#offlineNum').html(resp.data.monitorStatus.offlineNum)
                    $('#repairNum').html(resp.data.monitorStatus.repairNum)

                    let equip_name = resp.data.deviceStatus.name
                    let equip_online = resp.data.deviceStatus.online
                    let equip_total = resp.data.deviceStatus.total

                    // 主页左下echarts
                    // 绘制左侧面
                    const CubeLeft = echarts.graphic.extendShape({
                        shape: {
                            x: 0,
                            y: 0
                        },
                        buildPath: function (ctx, shape) {
                            const xAxisPoint = shape.xAxisPoint
                            const c0 = [shape.x, shape.y]
                            const c1 = [shape.x - 13, shape.y - 13]
                            const c2 = [xAxisPoint[0] - 13, xAxisPoint[1] - 13]
                            const c3 = [xAxisPoint[0], xAxisPoint[1]]
                            ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
                        }
                    })
                    // 绘制右侧面
                    const CubeRight = echarts.graphic.extendShape({
                        shape: {
                            x: 0,
                            y: 0
                        },
                        buildPath: function (ctx, shape) {
                            const xAxisPoint = shape.xAxisPoint
                            const c1 = [shape.x, shape.y]
                            const c2 = [xAxisPoint[0], xAxisPoint[1]]
                            const c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9]
                            const c4 = [shape.x + 18, shape.y - 9]
                            ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
                        }
                    })
                    // 绘制顶面
                    const CubeTop = echarts.graphic.extendShape({
                        shape: {
                            x: 0,
                            y: 0
                        },
                        buildPath: function (ctx, shape) {
                            const c1 = [shape.x, shape.y]
                            const c2 = [shape.x + 18, shape.y - 9]
                            const c3 = [shape.x + 5, shape.y - 22]
                            const c4 = [shape.x - 13, shape.y - 13]
                            ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
                        }
                    })
                    // 注册三个面图形
                    echarts.graphic.registerShape('CubeLeft', CubeLeft)
                    echarts.graphic.registerShape('CubeRight', CubeRight)
                    echarts.graphic.registerShape('CubeTop', CubeTop)

                    const MAX = equip_total
                    const VALUE = equip_online
                    let option1_first = {
                        // backgroundColor: "#012366",
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            },
                            formatter: function (params, ticket, callback) {
                                const item = params[1]
                                return item.name + ' : ' + item.value;
                            }
                        },
                        // grid: {
                        //     left: 40,
                        //     right: 40,
                        //     bottom: 100,
                        //     top: 100,
                        //     containLabel: true
                        // },
                        xAxis: {
                            type: 'category',
                            data: equip_name,
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: 'white'
                                }
                            },
                            // offset: 25,
                            axisTick: {
                                show: true,
                                // length: 9,
                                alignWithLabel: true,
                                lineStyle: {
                                    color: '#7DFFFD'
                                }
                            },
                            axisLabel: {
                                show: true,
                                fontSize: 10
                            },
                        },
                        yAxis: {
                            type: 'value',
                            axisLine: {
                                show: true,
                                lineStyle: {
                                    color: 'white'
                                }
                            },
                            splitLine: {
                                show: false
                            },
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: true,
                                fontSize: 12
                            }
                            // boundaryGap: ['0', '80%']
                        },
                        series: [{
                            type: 'custom',
                            renderItem: function (params, api) {
                                const location = api.coord([api.value(0), api.value(1)])
                                return {
                                    type: 'group',
                                    children: [{
                                        type: 'CubeLeft',
                                        shape: {
                                            api,
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0])
                                        },
                                        style: {
                                            fill: 'rgba(47,102,192,.27)'
                                        }
                                    }, {
                                        type: 'CubeRight',
                                        shape: {
                                            api,
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0])
                                        },
                                        style: {
                                            fill: 'rgba(59,128,226,.27)'
                                        }
                                    }, {
                                        type: 'CubeTop',
                                        shape: {
                                            api,
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0])
                                        },
                                        style: {
                                            fill: 'rgba(72,156,221,.27)'
                                        }
                                    }]
                                }
                            },
                            data: MAX
                        }, {
                            type: 'custom',
                            renderItem: (params, api) => {
                                const location = api.coord([api.value(0), api.value(1)])
                                var color = api.value(1) > 2000 ? 'red' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(67,102,243,1)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(29,67,243,1)'
                                }
                                ])
                                return {
                                    type: 'group',
                                    children: [{
                                        type: 'CubeLeft',
                                        shape: {
                                            api,
                                            xValue: api.value(0),
                                            yValue: api.value(1),
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0])
                                        },
                                        style: {
                                            fill: color
                                        }
                                    }, {
                                        type: 'CubeRight',
                                        shape: {
                                            api,
                                            xValue: api.value(0),
                                            yValue: api.value(1),
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0])
                                        },
                                        style: {
                                            fill: color
                                        }
                                    }, {
                                        type: 'CubeTop',
                                        shape: {
                                            api,
                                            xValue: api.value(0),
                                            yValue: api.value(1),
                                            x: location[0],
                                            y: location[1],
                                            xAxisPoint: api.coord([api.value(0), 0])
                                        },
                                        style: {
                                            fill: color
                                        }
                                    }]
                                }
                            },
                            data: VALUE
                        }, {
                            type: 'bar',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'top',
                                    fontSize: 10,
                                    color: '#fff',
                                    offset: [2, -25],
                                    // formatter: function (v) {
                                    //     var val = v.data;
                                    //     var value = VALUE.data
                                    //     return value + '/' + val;
                                    // },
                                }
                            },
                            itemStyle: {
                                color: 'transparent'
                            },
                            tooltip: {

                            },
                            data: MAX
                        }]
                    }
                    echarts.init(document.getElementById('echarts_first_leftBottom')).setOption(option1_first); //主页左下角echarts
                }, 3000);
            }
        })
    }
    setTimeout(() => {
        equip_load()
    }, 3000);
    setInterval(() => {
        equip_load()
    }, 30000);
    // 越界告警、安防
    function warning() {
        $.ajax({
            url: "http://58.16.56.202:9000/smart-bldg/big/screen/eventOutofBoundsAlarm",
            headers: { 'Auth-Token': token },
            success: function (resp) {
                setTimeout(() => {
                    console.log(resp)
                    $('#securityAlarm_totle').html(resp.data.securityAlarm.totalNum)
                    $('#securityAlarm_unHandlerNum').html(resp.data.securityAlarm.unHandlerNum)
                    $('#securityAlarm_handlerNum').html(resp.data.securityAlarm.handlerNum)
                    //cross_box
                    //越界告警
                    let auto_warn = resp.data
                    // console.log(auto_warn)
                    let html = template("cross_temp", auto_warn);
                    document.getElementById('cross_box').innerHTML = html
                    // 安防告警
                    let security_alarm = resp.data.securityAlarmDetail
                    document.getElementById('warn_list').innerHTML = template("warn_list_temp", { security: security_alarm });

                    //近三个月告警趋势
                    let recent_month = resp.data.threeMonthsAlarm
                    let recent_month_arr = []
                    let recent_alarmNum_arr = []
                    recent_month.forEach((item) => {
                        recent_month_arr.push(item.month)
                        recent_alarmNum_arr.push(item.alarmNum)
                    })

                    let option2_first = {
                        // title: {
                        //     text: '一周内人员出入总数变化图',
                        //     textStyle: {
                        //         fontSize: 25,
                        //         fontWeight: 'normal',
                        //         color: '#fff',
                        //     },
                        //     x: 'center'
                        // },
                        // backgroundColor: "#05224d",
                        tooltip: {},
                        grid: {
                            top: '8%',
                            left: '1%',
                            right: '1%',
                            bottom: '8%',
                            containLabel: true,
                        },
                        legend: {
                            itemGap: 50,
                            data: ['人员出入总数'],
                            textStyle: {
                                color: '#f9f9f9',
                                borderColor: '#fff'
                            },
                        },
                        xAxis: [{
                            type: 'category',
                            boundaryGap: true,
                            axisLine: { //坐标轴轴线相关设置。数学上的x轴
                                show: true,
                                lineStyle: {
                                    color: '#f9f9f9'
                                },
                            },
                            axisLabel: { //坐标轴刻度标签的相关设置
                                textStyle: {
                                    color: '#d1e6eb',
                                    margin: 15,
                                },
                            },
                            axisTick: {
                                show: false,
                            },
                            data: recent_month_arr
                        }],
                        yAxis: [{
                            type: 'value',
                            min: 0,
                            // max: 140,
                            splitNumber: 7,
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: '#0a3256'
                                }
                            },
                            axisLine: {
                                show: false,
                            },
                            axisLabel: {
                                margin: 20,
                                textStyle: {
                                    color: '#d1e6eb',

                                },
                            },
                            axisTick: {
                                show: false,
                            },
                        }],
                        series: [{
                            // name: '注册总量',
                            type: 'line',
                            smooth: true, //是否平滑曲线显示
                            // 			symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                            showAllSymbol: true,
                            symbol: 'emptyCircle',
                            symbolSize: 6,
                            lineStyle: {
                                normal: {
                                    color: "#28ffb3", // 线条颜色
                                },
                                borderColor: '#f0f'
                            },
                            label: {
                                show: true,
                                position: 'top',
                                textStyle: {
                                    color: '#fff',
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: "#28ffb3",

                                }
                            },
                            tooltip: {
                                show: false
                            },
                            areaStyle: { //区域填充样式
                                normal: {
                                    //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                        offset: 0,
                                        color: 'rgba(0,154,120,1)'
                                    },
                                    {
                                        offset: 1,
                                        color: 'rgba(0,0,0, 0)'
                                    }
                                    ], false),
                                    shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                                }
                            },
                            data: recent_alarmNum_arr
                        }
                        ]
                    };
                    echarts.init(document.getElementById('echarts_first_rightBottom')).setOption(option2_first); //主页右下角echarts
                }, 3000);
            }
        })
    }
    warning()
    setInterval(() => {
        warning()
    }, 60000);

    function personal_status() {
        //人员状况、访客进入管理
        $.ajax({
            url: "http://58.16.56.202:9000/smart-bldg/big/screen/personnelStatus",
            headers: { 'Auth-Token': token },
            success: function (resp) {
                console.log(resp)
                //人员状况
                $('#company_person ul li').eq(0).html(resp.data.personnelStatus.employeeNum[0])
                $('#company_person ul li').eq(1).html(resp.data.personnelStatus.employeeNum[1])
                $('#company_person ul li').eq(2).html(resp.data.personnelStatus.employeeNum[2])
                $('#company_person ul li').eq(3).html(resp.data.personnelStatus.employeeNum[3])
                $('#visitor_person ul li').eq(0).html(resp.data.personnelStatus.personNum[0])
                $('#visitor_person ul li').eq(1).html(resp.data.personnelStatus.personNum[1])
                $('#visitor_person ul li').eq(2).html(resp.data.personnelStatus.personNum[2])
                $('#visitor_person ul li').eq(3).html(resp.data.personnelStatus.personNum[3])

                $('#visitors_enter1 li img').eq(0).attr('src', resp.data.personEnterRealTime[0].recordImage)
                $('#visitors_enter1 li').eq(1).html('姓名：' + resp.data.personEnterRealTime[0].personName)
                $('#visitors_enter1 li').eq(2).html('通过门禁：' + resp.data.personEnterRealTime[0].deviceName)
                $('#visitors_enter1 li').eq(3).html('进入时间：' + resp.data.personEnterRealTime[0].swingTime)

                $('#visitors_enter2 li img').eq(0).attr('src', resp.data.personEnterRealTime[1].recordImage)
                $('#visitors_enter2 li').eq(1).html('姓名：' + resp.data.personEnterRealTime[1].personName)
                $('#visitors_enter2 li').eq(2).html('通过门禁：' + resp.data.personEnterRealTime[1].deviceName)
                $('#visitors_enter2 li').eq(3).html('进入时间：' + resp.data.personEnterRealTime[1].swingTime)

                $('#visitors_enter3 li img').eq(0).attr('src', resp.data.personEnterRealTime[2].recordImage)
                $('#visitors_enter3 li').eq(1).html('姓名：' + resp.data.personEnterRealTime[2].personName)
                $('#visitors_enter3 li').eq(2).html('通过门禁：' + resp.data.personEnterRealTime[2].deviceName)
                $('#visitors_enter3 li').eq(3).html('进入时间：' + resp.data.personEnterRealTime[2].swingTime)

                $('.visitor-sys ul li').eq(0).html(resp.data.personRealTime.totalNum)
                $('.visitor-sys ul li').eq(1).html(resp.data.personRealTime.currentNum)
                $('.visitor-sys ul li').eq(2).html(resp.data.personRealTime.notYetNum)

                $('.visitor-list ul li').eq(0).children().eq(0).html(resp.data.personEnterDetail[0].personName)
                $('.visitor-list ul li').eq(0).children().eq(1).html(resp.data.personEnterDetail[0].accessName)
                $('.visitor-list ul li').eq(0).children().eq(2).html(resp.data.personEnterDetail[0].timeStart)
                $('.visitor-list ul li').eq(0).children().eq(3).html(resp.data.personEnterDetail[0].status)

                $('.visitor-list ul li').eq(1).children().eq(0).html(resp.data.personEnterDetail[1].personName)
                $('.visitor-list ul li').eq(1).children().eq(1).html(resp.data.personEnterDetail[1].accessName)
                $('.visitor-list ul li').eq(1).children().eq(2).html(resp.data.personEnterDetail[1].timeStart)
                $('.visitor-list ul li').eq(1).children().eq(3).html(resp.data.personEnterDetail[1].status)

                $('.visitor-list ul li').eq(2).children().eq(0).html(resp.data.personEnterDetail[2].personName)
                $('.visitor-list ul li').eq(2).children().eq(1).html(resp.data.personEnterDetail[2].accessName)
                $('.visitor-list ul li').eq(2).children().eq(2).html(resp.data.personEnterDetail[2].timeStart)
                $('.visitor-list ul li').eq(2).children().eq(3).html(resp.data.personEnterDetail[2].status)

                // $('.visitor-list ul li').eq(3).children().eq(0).html(resp.data.personEnterDetail[3].personName)
                // $('.visitor-list ul li').eq(3).children().eq(1).html(resp.data.personEnterDetail[3].accessName)
                // $('.visitor-list ul li').eq(3).children().eq(2).html(resp.data.personEnterDetail[3].timeStart)
                // $('.visitor-list ul li').eq(3).children().eq(3).html(resp.data.personEnterDetail[3].status)
            }
        })
    }
    setTimeout(() => {
        personal_status()
    }, 3000);
    setInterval(() => {
        personal_status()
    }, 30000);

    function car_load_data() {
        //车位占比
        $.ajax({
            url: "http://58.16.56.202:9000/smart-bldg/big/screen/parkingLotProportion",
            headers: { 'Auth-Token': token },
            success: function (resp) {
                console.log(resp)
                setTimeout(() => {
                    let option1_third_value = resp.data.carSpaceProportion.totalNum
                    let option1_third_value_used = resp.data.carSpaceProportion.usedNum

                    var option1_third = {
                        // backgroundColor: '222',
                        grid: {
                            top: '0',
                            left: '0',
                            right: '4.75%',
                            bottom: '0',
                            containLabel: true
                        },
                        yAxis: [{
                            type: 'category',
                            data: ['停车位'],
                            inverse: true,
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                margin: 16,
                                textStyle: {
                                    fontSize: 14,
                                    color: '#fff'
                                }
                            },
                            axisLine: {
                                show: false
                            }
                        }],
                        xAxis: [{
                            type: 'value',
                            axisLabel: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            splitLine: {
                                show: false
                            }
                        }],
                        series: [{
                            type: 'bar',
                            barWidth: 14,
                            data: [option1_third_value_used],
                            label: {
                                normal: {
                                    show: true,
                                    position: 'insideBottomRight',
                                    formatter: '{c}' + "/" + option1_third_value,
                                    distance: 0,
                                    offset: [30, -20],
                                    color: '#fff',
                                    fontSize: 16,
                                    padding: [5, 15, 10, 15],
                                    backgroundColor: {
                                        image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAAA+CAYAAAD5wvNAAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA0xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjQ3NTQ1RkVGOUM1MTFFOEJCQTdENzhFNjM5MzM3NkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjQ3NTQ1RkRGOUM1MTFFOEJCQTdENzhFNjM5MzM3NkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE5M2UxZjIxLTQyMmYtMTE3Yy05MTVlLWVhNzA0NDUwYzIzOSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmE5M2UxZjIxLTQyMmYtMTE3Yy05MTVlLWVhNzA0NDUwYzIzOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvulhDwAAAQ3SURBVHja7J1JaBRBGIX/iZEQN1CjwVxUcL+4hUnUU8SDHjQiiqJR0EOCYMAtIG4HRQXBBUQkXgQxxoOieJZ4UzO4oAe3CKJoQI2IGhUTZHz/dI12mul090xcJvU+ePSkpqsTXr1Ud81Ud8UW1SZFYuJgtsn0z+Iqd+2TFPHWGY1tFVSJ96ZgOx5lo7AdDBX9OmbMczx3mas8076BZQUhfoe3ns+xve/7/X6JcpyIZRK17u+2+I7tF5S/w+vneP0YuoXX16G33mMk5kkkCiV7RkLroNXQbE/Tk39HkdEIaDK00JTr//kd6Dx0FnqfzcELsqgzBjoCvYCOQuUMS14QM22lbfYSOgGV/cnAaG/UAD2FtkKD2QZ5yyBoE/QkfkMaoIF9HZiJerqDDkND6He/YYhp0wRCM62vAlMN3YZm0t9+ywyoNX5TluYamFroEjSMnlrR21xEaGqzDcxGqBEaQC+tQdu6MX4r1faRArPEXEUTOzkRb01lIFRgpkJN7Fms72maEJqpQYHR4VUzR0LEZKA5nug55PYGZjM0nV4Rg2Zhi19g9FO/vfSIeNiDXqYsU2B28lREfE5Nu7yBKYE20Bviw3r0MiXuwNRAxfSF+FBsMtIjMIT0xpp0YEZDs+gHCWC2XvxqYOYL57OQYDQjVRqYCnpBQlKugZlCH0hIJmtgJtAHEpKJGphS+kBCUqqBGUofSEiGFtADEgUGhjAwhIEhDAzJQ7o0MJ/pAwnJZw3MG/pAQvJBA/OMPpCQtGlgHtMHEpInGphW+kBCckcDo08mStILEoBmpCV90XuXfpAA7ibi0p7+HOYc/SAB6KPOxB2Yb/SE+KDZOOsOTAd0hr4QH87gdNThDoxyAOqkN8RDp8mGeAPTDu2jP8TDfr3YzRQY5Th0jx4Rg2bhmLvAG5huaCX0iV5Zj34pvQq9S3dvgVHaoLXQD3pmLdr2NYmK1DOZJSgwylWonr5ZSz3CcjXTG71NoDoF1bGnsa5nqUtUptpeogZGOQ0t5zWNNcPnFYk5qTaXbAOjXBFnUQOOnvov96EKhOVy0I5h5/TqhXClOI+u4lcI/Qdty91QPDFXHoapEGUSeBd0UJyFKnRs/oV+5y1foZPQJATlANQVtmI2dw28Fmf5m3Fmq4s2cT7N/096gS1ts7HiLH/zKupBclmRrcP0NCq9ob9KnGfN6NOjnSX8nCcwDmRb/VW6zQWss4SfyCNxZlXqRLmcJ/wX9tEfqX/IBaN84RC0I8dj6Opm22xKo803sulziZtyqK91t9tmms2B0XO6Ppv4WhZ1W0zdJANjFzo6qJZod07o/Odlpq4wMHYOMRdLuBv6dB9d1vejrWYxMA46olhktrnsw8BYhPYeC3x6j84IvRADYxEPMlyfZHOdw8BYhHsElB5JtdAWh0JakBH9jGW4OJ9UN9GO3/wUYAAaXtVsjsG1HQAAAABJRU5ErkJggg=='
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                                        offset: 0,
                                        color: '#57eabf' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#2563f9' // 100% 处的颜色
                                    }], false),
                                    barBorderRadius: 14
                                }
                            }
                        }, {
                            type: "bar",
                            barWidth: 14,
                            xAxisIndex: 0,
                            barGap: "-100%",
                            data: [option1_third_value],
                            itemStyle: {
                                normal: {
                                    color: "#444a58",
                                    barBorderRadius: 14
                                }
                            },
                            zlevel: -1
                        }]
                    };
                    echarts.init(document.getElementById('echarts_third_leftTop')).setOption(option1_third); //三页左上角echarts
                }, 3000);
                //车辆类型
                var dataStyle = {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        },
                        shadowBlur: 0,
                        shadowColor: '#203665'
                    }
                };
                option2_third = {
                    // backgroundColor: "#20263f",
                    series: [{
                        name: '第一个圆环',
                        type: 'pie',
                        clockWise: false,
                        radius: [50, 55],
                        itemStyle: dataStyle,
                        hoverAnimation: false,
                        center: ['15%', '50%'],
                        data: [{
                            value: resp.data.carInfoType.employeeNum,
                            label: {
                                normal: {
                                    rich: {
                                        a: {
                                            color: '#00ADFF',
                                            align: 'center',
                                            fontSize: 20,
                                            fontWeight: "bold"
                                        },
                                        b: {
                                            color: '#fff',
                                            align: 'center',
                                            fontSize: 16
                                        }
                                    },
                                    formatter: function (params) {
                                        return "{a|" + params.value + "}";
                                    },
                                    position: 'center',
                                    show: true,
                                    textStyle: {
                                        fontSize: '14',
                                        fontWeight: 'normal',
                                        color: '#fff'
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#2c6cc4',
                                    shadowColor: '#2c6cc4',
                                    shadowBlur: 0
                                }
                            }
                        }, {
                            value: 1000,
                            name: 'invisible',
                            itemStyle: {
                                normal: {
                                    color: '#24375c'
                                },
                                emphasis: {
                                    color: '#24375c'
                                }
                            }
                        }]
                    }, {
                        name: '第二个圆环',
                        type: 'pie',
                        clockWise: false,
                        radius: [50, 55],
                        itemStyle: dataStyle,
                        hoverAnimation: false,
                        center: ['50%', '50%'],
                        data: [{
                            value: resp.data.carInfoType.personNum,
                            label: {
                                normal: {
                                    rich: {
                                        a: {
                                            color: '#00FFFF',
                                            align: 'center',
                                            fontSize: 20,
                                            fontWeight: "bold"
                                        },
                                        b: {
                                            color: '#fff',
                                            align: 'center',
                                            fontSize: 16
                                        }
                                    },
                                    formatter: function (params) {
                                        return "{a|" + params.value + "}";
                                    },
                                    position: 'center',
                                    show: true,
                                    textStyle: {
                                        fontSize: '14',
                                        fontWeight: 'normal',
                                        color: '#fff'
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#00FFFF',
                                    shadowColor: '#00FFFF',
                                    shadowBlur: 0
                                }
                            }
                        }, {
                            value: 100,
                            name: 'invisible',
                            itemStyle: {
                                normal: {
                                    color: '#24375c'
                                },
                                emphasis: {
                                    color: '#24375c'
                                }
                            }
                        }]
                    }, {
                        name: '第三个圆环',
                        type: 'pie',
                        clockWise: false,
                        radius: [50, 55],
                        itemStyle: dataStyle,
                        hoverAnimation: false,
                        center: ['85%', '50%'],
                        data: [{
                            value: resp.data.carInfoType.temporaryNum,
                            label: {
                                normal: {
                                    rich: {
                                        a: {
                                            color: '#FF6767',
                                            align: 'center',
                                            fontSize: 20,
                                            fontWeight: "bold"
                                        },
                                        b: {
                                            color: '#fff',
                                            align: 'center',
                                            fontSize: 16
                                        }
                                    },
                                    formatter: function (params) {
                                        return "{a|" + params.value + "}";//"{b|缺报统计}\n\n"+"{a|"+params.value+"个}"+"\n\n{b|增长2%}";
                                    },
                                    position: 'center',
                                    show: true,
                                    textStyle: {
                                        fontSize: '14',
                                        fontWeight: 'normal',
                                        color: '#fff'
                                    }
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#FF6767',
                                    shadowColor: '#FF6767',
                                    shadowBlur: 0
                                }
                            }
                        }, {
                            value: 1000,
                            name: 'invisible',
                            itemStyle: {
                                normal: {
                                    color: '#24375c'
                                },
                                emphasis: {
                                    color: '#24375c'
                                }
                            }
                        }]
                    }]
                }
                echarts.init(document.getElementById('echarts_third_leftMid')).setOption(option2_third); //三页中echarts
            }
        })
    }
    setTimeout(() => {
        car_load_data()
    }, 3000);
    setInterval(() => {
        car_load_data()
    }, 30000);

    //车辆进出记录
    function car_in_out() {
        $.ajax({
            url: "http://58.16.56.202:9000/smart-bldg/big/screen/carInAndOutRecords",
            headers: { 'Auth-Token': token },
            success: function (resp) {
                console.log(resp.data)
                let records_data = resp.data.slice(0, 10)
                var html = template("records_temp", { record: records_data })
                document.getElementById('records_list').innerHTML = html
            }
        })
    }
    setTimeout(() => {
        car_in_out()
    }, 3000);
    setInterval(() => {
        car_in_out()
    }, 30000);
    //停车场占用率
    function car_use_rate() {
        $.ajax({
            url: "http://58.16.56.202:9000/smart-bldg/big/screen/parkingLotOccupancyRate",
            headers: { 'Auth-Token': token },
            success: function (resp) {
                console.log(resp)
                var data = {
                    time: resp.data.time,
                    used: resp.data.used
                }
                option3_third = {
                    // backgroundColor: '#080b30',
                    legend: {
                        color: ["#17B4FA", "#47D8BE", "#F9A589"],
                        data: ['停车场占用率'],
                        left: 'center',
                        // top: "8%",
                        textStyle: {
                            color: "#ffffff"
                        }
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            lineStyle: {
                                color: {
                                    type: 'linear',
                                    x: 0,
                                    y: 0,
                                    x2: 0,
                                    y2: 1,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(0, 255, 233,0)'
                                    }, {
                                        offset: 0.5,
                                        color: 'rgba(255, 255, 255,1)',
                                    }, {
                                        offset: 1,
                                        color: 'rgba(0, 255, 233,0)'
                                    }],
                                    global: false
                                }
                            },
                        },
                    },
                    grid: {
                        top: '15%',
                        // left: '-5%',
                        // right: '5%',
                        bottom: '15%',
                        //     // containLabel: true
                    },
                    xAxis: [{
                        type: 'category',
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#2c6cc4'
                            },
                        },
                        splitArea: {
                            // show: true,
                            color: '#f00',
                            lineStyle: {
                                color: '#f00'
                            },
                        },
                        // axisLabel: {
                        //     color: '#fff',
                        //     formatter: function (params) {
                        //         var newParamsName = ""; // 最终拼接成的字符串
                        //         var paramsNameNumber = params.length; // 实际标签的个数
                        //         var provideNumber = 6; // 每行能显示的字的个数
                        //         var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                        //         /**
                        //          * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                        //          */
                        //         // 条件等同于rowNumber>1
                        //         if (paramsNameNumber > provideNumber) {
                        //             /** 循环每一行,p表示行 */
                        //             for (var p = 0; p < rowNumber; p++) {
                        //                 var tempStr = ""; // 表示每一次截取的字符串
                        //                 var start = p * provideNumber; // 开始截取的位置
                        //                 var end = start + provideNumber; // 结束截取的位置
                        //                 // 此处特殊处理最后一行的索引值
                        //                 if (p == rowNumber - 1) {
                        //                     // 最后一次不换行
                        //                     tempStr = params.substring(start, paramsNameNumber);
                        //                 } else {
                        //                     // 每一次拼接字符串并换行
                        //                     tempStr = params.substring(start, end) + "\n";
                        //                 }
                        //                 newParamsName += tempStr; // 最终拼成的字符串
                        //             }

                        //         } else {
                        //             // 将旧标签的值赋给新标签
                        //             newParamsName = params;
                        //         }
                        //         //将最终的字符串返回
                        //         return newParamsName
                        //     }
                        // },
                        splitLine: {
                            show: false
                        },
                        boundaryGap: false,
                        data: resp.data.time,
                    }],

                    yAxis: [{
                        type: 'value',
                        min: 0,
                        max: 100,
                        // splitNumber: 4,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(255,255,255,0.1)'
                            }
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#2c6cc4'
                            },
                        },
                        axisLabel: {
                            show: true,
                            // margin: 20,
                            textStyle: {
                                color: '#2c6cc4'
                            }, formatter: function (params) {
                                return params + '%'
                            }
                        },
                        axisTick: {
                            show: true,
                        },
                    }],
                    series: [{
                        name: '停车占用率',
                        type: 'line',
                        // smooth: true, //是否平滑
                        showAllSymbol: false,
                        // symbol: 'image://./static/images/guang-circle.png',
                        symbol: 'circle',
                        symbolSize: 6,
                        lineStyle: {
                            normal: {
                                color: "#2c6cc4",
                                shadowColor: 'rgba(0, 0, 0, .3)',
                                shadowBlur: 0,
                                shadowOffsetY: 5,
                                shadowOffsetX: 5,
                            },
                        },
                        label: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#2c6cc4',
                            },
                            normal: {
                                show: true,
                                position: "top",
                                formatter: [
                                    ' {a|{c}%}',
                                ].join(','),
                                rich: {
                                    a: {
                                        color: '#2c6cc4',
                                        align: 'center',
                                    },
                                }
                            }
                        },
                        itemStyle: {
                            color: "#2c6cc4",
                            borderColor: "#fff",
                            borderWidth: 3,
                            shadowColor: 'rgba(0, 0, 0, .3)',
                            shadowBlur: 0,
                            shadowOffsetY: 2,
                            shadowOffsetX: 2,
                        },
                        tooltip: {
                            show: true
                            // formatter: '{c}%'
                            // formatter: '{b} <br/> {c}%'//'{b}' + '时' + '<br />{a}: {c}' + '%'//<br />{a1}: {c1}
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: 'rgba(108,80,243,0.3)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(108,80,243,0)'
                                }
                                ], false),
                                shadowColor: 'rgba(108,80,243, 0.9)',
                                shadowBlur: 20
                            }
                        },
                        data: resp.data.used
                    }]
                };
                echarts.init(document.getElementById('echarts_third_rightTop')).setOption(option3_third); //三页右上echarts
            }
        })
    }
    setTimeout(() => {
        car_use_rate()
    }, 3000);
    setInterval(() => {
        car_use_rate()
    }, 30000);

    function person_infloor_load() {
        $.ajax({
            url: "http://58.16.56.202:9000/smart-bldg/big/screen/personFloor",
            headers: { 'Auth-Token': token },
            success: function (resp) {
                //楼层总人数
                console.log(resp)
                let person_arr = []
                person_arr.push(resp.data.personFloor.A6)
                person_arr.push(resp.data.personFloor.B6)
                person_arr.push(resp.data.personFloor.B8)
                person_arr.push(resp.data.personFloor.rest)

                // 第二页图表
                option1_second = {
                    // backgroundColor: 'black',
                    angleAxis: {
                        type: "value",
                        min: 0,
                        max: 70,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false
                        }
                    },
                    radiusAxis: {
                        type: "category",
                        data: ["A6", "B6", "B8", "其它"],
                        z: 100,
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            margin: 6,
                            fontSize: 10,
                            formatter: function (value, index) {
                                var list = person_arr;
                                return list[index] + "人";
                            },
                            textStyle: {
                                color: "#96F5F6"
                            },
                            interval: 0
                        }
                    },
                    polar: {
                        center: ["51%", "40%"]
                    },
                    tooltip: {
                        show: true
                    },
                    series: [
                        {
                            type: "bar",
                            barWidth: "30%",
                            data: [resp.data.personFloor.A6],
                            coordinateSystem: "polar",
                            name: "A6",
                            stack: "a",
                            roundCap: true,
                            itemStyle: {
                                color: "#BFA27C",
                                barBorderRadius: 5
                            },
                            showBackground: true,
                            backgroundStyle: {
                                color: "#27333F",
                                barBorderRadius: 50
                            }
                        },
                        {
                            type: "bar",
                            data: [0, resp.data.personFloor.B6, 0, 0],
                            coordinateSystem: "polar",
                            name: "B6",
                            stack: "a",
                            roundCap: true,
                            itemStyle: {
                                color: "#328CD9"
                            },
                            showBackground: true,
                            backgroundStyle: {
                                color: "#27333F"
                            }
                        },
                        {
                            type: "bar",
                            data: [0, 0, resp.data.personFloor.B8, 0],
                            coordinateSystem: "polar",
                            name: "B8",
                            stack: "a",
                            roundCap: true,
                            itemStyle: {
                                color: "#1FB4A7",
                                barBorderRadius: 5
                            },
                            showBackground: true,
                            backgroundStyle: {
                                color: "#27333F"
                            }
                        },
                        {
                            type: "bar",
                            data: [0, 0, 0, resp.data.personFloor.rest],
                            coordinateSystem: "polar",
                            name: "其它",
                            stack: "a",
                            roundCap: true,
                            itemStyle: {
                                color: "#424CB9",
                                barBorderRadius: 5
                            },
                            showBackground: true,
                            backgroundStyle: {
                                color: "#27333F"
                            }
                        }
                    ],
                    legend: {
                        bottom: 6,
                        icon: "circle",
                        itemHeight: 10,
                        show: true,
                        data: ["A6", "B6", "B8", "其它"],
                        selectedMode: false,
                        textStyle: {
                            color: "#96F5F6",
                            fontSize: 8
                        }
                    }
                }

                echarts.init(document.getElementById('echarts_second_leftTop')).setOption(option1_second); //二页左上角echarts
                //今日人流量统计
                option2_second = {
                    // backgroundColor: '#031A32',
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "shadow",
                            label: {
                                show: true
                            }
                        }
                    },
                    // grid: {
                    //     left: "4%",
                    //     top: "18%",
                    //     right: "5%",
                    //     bottom: "22%"
                    // },
                    legend: {
                        data: ["进", "出"],
                        top: "4%",
                        textStyle: {
                            color: "#1FC3CE",
                            fontSize: 12
                        }
                    },
                    xAxis: {
                        data: resp.data.peopleCounting.time,
                        axisLine: {
                            show: true, //隐藏X轴轴线
                            lineStyle: {
                                color: "#3d5269",
                                width: 1
                            }
                        },
                        axisTick: {
                            show: true, //隐藏X轴刻度
                            alignWithLabel: true
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "#ffffff", //X轴文字颜色
                                fontSize: 10
                            },
                            interval: 0,
                            // rotate: 30,
                            formatter: function (params) {
                                var newParamsName = ""; // 最终拼接成的字符串
                                var paramsNameNumber = params.length; // 实际标签的个数
                                var provideNumber = 6; // 每行能显示的字的个数
                                var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
                                /**
                                 * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                                 */
                                // 条件等同于rowNumber>1
                                if (paramsNameNumber > provideNumber) {
                                    /** 循环每一行,p表示行 */
                                    for (var p = 0; p < rowNumber; p++) {
                                        var tempStr = ""; // 表示每一次截取的字符串
                                        var start = p * provideNumber; // 开始截取的位置
                                        var end = start + provideNumber; // 结束截取的位置
                                        // 此处特殊处理最后一行的索引值
                                        if (p == rowNumber - 1) {
                                            // 最后一次不换行
                                            tempStr = params.substring(start, paramsNameNumber);
                                        } else {
                                            // 每一次拼接字符串并换行
                                            tempStr = params.substring(start, end) + "\n";
                                        }
                                        newParamsName += tempStr; // 最终拼成的字符串
                                    }

                                } else {
                                    // 将旧标签的值赋给新标签
                                    newParamsName = params;
                                }
                                //将最终的字符串返回
                                return newParamsName
                            }
                        }
                    },
                    yAxis: [{
                        type: "value",
                        name: "人数",
                        nameTextStyle: {
                            color: "#ffffff",
                            fontSize: 12
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                width: 1,
                                color: "#ffffff"
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: "#ffffff",
                                fontSize: 12
                            }
                        }
                    }],
                    series: [{
                        name: "进",
                        type: "bar",
                        barWidth: 8,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "#00FFFF"
                                },
                                {
                                    offset: 1,
                                    color: "#0080FF"
                                }
                                ])
                            }
                        },
                        data: resp.data.peopleCounting.in
                    },
                    {
                        name: "出",
                        type: "bar",
                        barWidth: 8,
                        itemStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: "#E29052"
                                },
                                {
                                    offset: 1,
                                    color: "#FA5A53"
                                }
                                ])
                            }
                        },
                        data: resp.data.peopleCounting.out
                    },

                    ]
                }

                echarts.init(document.getElementById('echarts_second_leftBottom')).setOption(option2_second); //二页左上角echarts
            }

        });
    }
    setTimeout(() => {
        person_infloor_load()
    }, 3000);
    setInterval(() => {
        person_infloor_load()
    }, 30000);
    // $.get("http://58.16.56.202:9000/smart-bldg/big/screen/personFloor", { 'Auth-Token': token }, function (resp) {
    //     console.log(resp)

    // })

    //设备信息
    $.ajax({
        url: "http://58.16.56.202:9000/smart-bldg/big/screen/listEnvironmentDevice",
        headers: { 'Auth-Token': token },
        success: function (resp) {
            console.log(resp)
        },
        error: function (resp) {
            console.log(resp)
        }
    });

})

const colorList = ["#9E87FF", '#73DDFF', '#fe9a8b', '#F56948', '#9E87FF']
option1_fourth = {
    // backgroundColor: '#fff',
    // title: {
    //     text: '全国6月销售统计',
    //     textStyle: {
    //         fontSize:12,
    //         fontWeight: 400
    //     },
    //     left:'center',
    //     top: '5%'
    // },
    legend: {
        icon: 'circle',
        top: '5%',
        right: '5%',
        itemWidth: 6,
        itemGap: 20,
        textStyle: {
            color: '#556677'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            label: {
                show: true,
                backgroundColor: '#fff',
                color: '#556677',
                borderColor: 'rgba(0,0,0,0)',
                shadowColor: 'rgba(0,0,0,0)',
                shadowOffsetY: 0
            },
            lineStyle: {
                width: 0
            }
        },
        backgroundColor: '#fff',
        textStyle: {
            color: '#5c6c7c'
        },
        padding: [10, 10],
        extraCssText: 'box-shadow: 1px 0 2px 0 rgba(163,163,163,0.5)'
    },
    grid: {
        top: '15%'
    },
    xAxis: [{
        type: 'category',
        data: ['上午', '中午', '下午', '夜晚'],
        axisLine: {
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: '#556677'
            },
            margin: 15
        },
        axisPointer: {
            label: {
                padding: [11, 5, 7],
                backgroundColor: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0,
                        color: '#fff' // 0% 处的颜色
                    }, {
                        offset: 0.9,
                        color: '#fff' // 0% 处的颜色
                    }, {
                        offset: 0.9,
                        color: '#33c0cd' // 0% 处的颜色
                    }, {
                        offset: 1,
                        color: '#33c0cd' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        },
        boundaryGap: false
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        axisLabel: {
            textStyle: {
                color: '#556677'
            }
        },
        splitLine: {
            show: false
        }
    }, {
        type: 'value',
        position: 'right',
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#556677'
            },
            formatter: '{value}'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: '#DCE2E8'
            }
        },
        splitLine: {
            show: false
        }
    }],
    series: [{
        name: '水',
        type: 'line',
        data: [10, 10, 30, 12, 15, 3, 7],
        symbolSize: 1,
        symbol: 'circle',
        smooth: true,
        yAxisIndex: 0,
        showSymbol: false,
        lineStyle: {
            width: 2,
            color: '#00FCFF',
            shadowColor: 'rgba(158,135,255, 0.3)',
            shadowBlur: 10,
            shadowOffsetY: 20
        },
        itemStyle: {
            normal: {
                color: colorList[0],
                borderColor: colorList[0]
            }
        }
    }, {
        name: '电',
        type: 'line',
        data: [5, 12, 11, 14, 25, 16, 10],
        symbolSize: 1,
        symbol: 'circle',
        smooth: true,
        yAxisIndex: 0,
        showSymbol: false,
        lineStyle: {
            width: 2,
            color: '#FFD200',
            shadowColor: 'rgba(115,221,255, 0.3)',
            shadowBlur: 10,
            shadowOffsetY: 20
        },
        itemStyle: {
            normal: {
                color: colorList[1],
                borderColor: colorList[1]
            }
        }
    },

    ]
};


var xAxisData = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],  //时间轴和柱状x轴数据
    dx = ["6", "9", "30", "15", "20", "40", "15", "20", "33", "35", "12", "24"];   //仪表盘数据
dx2 = ["77", "85", "60", "50", "20", "40", "60", "72", "50", "33", "55", "66"];   //仪表盘数据

var os = [];
for (var i = 0; i < dx.length; i++) {
    var series = [];
    series.push({
        data: [{
            value: dx[i],
            name: '照明'
        }]
    });

    series.push({
        data: [{
            value: dx2[i],
            name: '空调'
        }]
    });

    os.push({
        series: series
    });
}

var option2_fourth = {
    baseOption: {
        timeline: {
            axisType: 'category',
            autoPlay: true,
            bottom: 10,
            left: 30,
            data: xAxisData,
            lineStyle: {
                color: '#FFFFFF',
                width: 2,
            },
            label: {
                color: "#019aba"
            },
            checkpointStyle: {
                symbol: 'diamond',
                color: '#00FFFF',
                borderColor: '#00FFFF'
            }
        },
        // backgroundColor:'#384756',
        color: ['#019aba'],
        // title: {
        //     text: '说明',
        //     textStyle: {
        //         fontSize: 8,
        //         // fontWeight: 'bold',

        //     },
        // },

        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },

        series: [
            {
                type: 'gauge',
                center: ['20%', '40%'],
                radius: '60%',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                axisLine: {            // 坐标轴线
                    show: true,        // 默认显示，属性show控制显示与否
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.5, '#00EFC9'], [1, '#00BCF2']],
                        width: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: true,        // 属性show控制显示与否，默认不显示
                    splitNumber: 10,    // 每份split细分多少段
                    length: 3,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#fff',
                        width: 1,
                        type: 'solid'
                    }
                },
                splitLine: {           // 分隔线
                    show: true,        // 默认显示，属性show控制显示与否
                    length: 15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: '#fff',
                        width: 3,
                        type: 'solid'
                    }
                },
                pointer: {
                    width: 5
                },
                title: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontSize: 10,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
                    formatter: '{value}%',
                    textStyle: {
                        fontSize: 10,
                        fontWeight: "",
                        color: '#00BCF2',
                    }
                },

            },
            {
                type: 'gauge',
                center: ['75%', '40%'],
                radius: '60%',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                axisLine: {            // 坐标轴线
                    show: true,        // 默认显示，属性show控制显示与否
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.5, '#00EFC9'], [1, '#00BCF2']],
                        width: 10
                    }
                },
                axisTick: {            // 坐标轴小标记
                    show: true,        // 属性show控制显示与否，默认不显示
                    splitNumber: 10,    // 每份split细分多少段
                    length: 3,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: '#fff',
                        width: 1,
                        type: 'solid'
                    }
                },
                splitLine: {           // 分隔线
                    show: true,        // 默认显示，属性show控制显示与否
                    length: 15,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        color: '#fff',
                        width: 3,
                        type: 'solid'
                    }
                },
                pointer: {
                    width: 5
                },
                title: {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontSize: 10,
                        color: '#fff',
                        shadowColor: '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail: {
                    formatter: '{value}%',
                    textStyle: {
                        fontSize: 10,
                        fontWeight: "",
                        color: '#00BCF2',
                    }
                },

            }]
    },
    options: os
};


