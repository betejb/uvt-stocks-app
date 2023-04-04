package com.endava.stocks.api;

import org.springframework.boot.info.BuildProperties;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleController {

    private final BuildProperties buildProperties;

    public SampleController(BuildProperties buildProperties) {
        this.buildProperties = buildProperties;
    }

    @GetMapping("/")
    public String sayHello() {
        return "Hello \uD83D\uDCC8 trader!";
    }

    @GetMapping(value = "/info")
    public AppInfo info() {
        return new AppInfo(buildProperties.getVersion());
    }

    record AppInfo(String version) {
    }

}
