@echo off
setlocal

set "BASEDIR=%~dp0"
if "%BASEDIR:~-1%"=="\" set "BASEDIR=%BASEDIR:~0,-1%"

set "WRAPPER_JAR=%BASEDIR%\.mvn\wrapper\maven-wrapper.jar"
set "WRAPPER_PROPS=%BASEDIR%\.mvn\wrapper\maven-wrapper.properties"

java ^
  -classpath "%WRAPPER_JAR%" ^
  -Dmaven.multiModuleProjectDirectory="%BASEDIR%" ^
  -Dmaven.wrapper.propertiesFile="%WRAPPER_PROPS%" ^
  org.apache.maven.wrapper.MavenWrapperMain ^
  %*

endlocal