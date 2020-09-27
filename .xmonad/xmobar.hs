-- XMobar config
-- Author - Ndemo Richard
-- License WTFPL http://www.wtfpl.net/


Config {
         --position         = Static { xpos = 0 , ypos = 2, width = 1920, height = 22 }
         position         = TopP 0 54
       , textOffset       = 15
       , iconOffset       = 1
       , lowerOnStart     = True
       , hideOnStart      = False
       , allDesktops      = True
       , overrideRedirect = True
       , pickBroadest     = True
       , persistent       = True
       , borderColor      = "#151515"
       , border           = NoBorder
       , bgColor          = "#151515"
       , fgColor          = "#959595"
       , alpha            = 0
       , iconRoot         = "."
       , font             = "xft:SFNS Display:size=10,Noto color emoji,FontAwesome,:size=10"
       --,font =         "xft:Bitstream Vera Sans Mono:size=9:bold:antialias=true"
      -- ,font             ="xft:Bitstream DejaVu Sans Mono Book:size=9:bold:antialias=true"
            
       , additionalFonts  = [
                             "xft:Larabiefont:size=12:weight=bold:antialias=true:hinting=true"         -- fn=1
                            ,"xft:Terminus Re33 Bold:pixelsize=6"                                 -- fn=2 (for separators)
                            ,"xft:Weather Icons:weight=bold:pixelsize=14:antialias=true:hinting=true"  -- fn=3
                            ,"xft:SF Square Head:weight=bold:size=11:antialias=true:hinting=true"      -- fn=4 (for UnsafeStdinReader)
                            ,"xft: FontAwesome :size=10"                             --fn=5
                        ]
       , commands         = [
                              Run UnsafeStdinReader
                            , Run PipeReader         "/tmp/BAT"     "BAT"                           -- battery
                            , Run PipeReader         "/tmp/WI"      "WI"                       --- weather
                            , Run PipeReader         "/tmp/CDT"     "CDT"                           -- date and time
                            , Run PipeReader         "/tmp/NC"      "NC"                           -- ineternet
                            , Run PipeReader         "/tmp/NT"      "NT"                           -- nettraf
                            , Run PipeReader         "/tmp/VOL"     "VOL"                           -- volume
                            , Run PipeReader         "/tmp/RU"      "RU"                           -- disk
                            , Run PipeReader         "/tmp/CU"      "CU"                           -- cpu
                            , Run PipeReader         "/tmp/MU"      "MU"                           -- MEMORY
                            ]
       , sepChar          = "%"
       , alignSep         = "||"
       , template         = " <action=`mygtkmenu .menurc` button=1><fn=5></fn></action> <action=`xdotool key 0xffeb+0xff1b` button=3><action=`xdotool key 0xffe3+0xffe9+0xff51` button=4><action=`xdotool key 0xffe3+0xffe9+0xff53` button=5>%UnsafeStdinReader%</action></action></action> <action=`mygtkmenu .placerc` button=1><action=`XMUptimeToggle` button=3><fn=5></fn></action></action>   <action=`xdotool key 0xffeb+0xffe1+0x7a`>  </action>|%CDT%<action=`XMDateToggle` button=1><action=`XMGSimplecal` button=3><action=`XMCal` button=45>  <fn=1><fc=#ccc>  </fc></fn></action></action></action>  <fc=#ccc><action=`XMGWeather` button=1>   </action><fn=2> </fn><action=`XMAccuWeather` button=1></action></fc>|     <action=`XMNetToggle` button=1><action=`xdg-open http://192.168.0.1` button=2><action=`XMVnstat+h` button=3><action=`XMifconfig` button=45>   </action></action></action></action>  <action=`XMTrafToggle` button=1><action=`XMTransgui` button=3><action=`XMVnstat-m` button=4><action=`XMVnstat-d` button=5>   </action></action></action></action>   <action=`XMCPUToggle` button=1><fc=#ccc></fc></action>  <action=`XMTempToggle` button=1><action=`XMSensors` button=3><fc=#ccc> 📅 </fc></action></action>   <action=`XMMemToggle` button=1><fc=#ccc></fc></action>  <action=`XMVolToggle` button=1><action=`XMPavucontrol` button=2><action=`XMMute` button=3><action=`pulseaudio-ctl down` button=4><action=`pulseaudio-ctl up` button=5></action></action></action></action></action>  %VOL%       <action=`XMToggleAll` button=1>%NC%<action=`XMCleanAll` button=3><fc=#ccc>  </fc></action></action>"
       }
